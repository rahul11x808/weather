from django.shortcuts import render, redirect
from weatherapp.key import api_key
import requests
import math
from django.http import HttpResponse

def index(request):
    # Set a default weather condition for the home page
    context = {
        "weather_condition": "default"
    }
    return render(request, "weatherapp/home.html", context)


def result(request):
    if request.method == "POST":
        city_name = request.POST["city"].lower()
        url = f"http://api.openweathermap.org/data/2.5/forecast?q={city_name}&appid={api_key}"
        w_dataset = requests.get(url).json()

        try:
            context = {
                "city_name": w_dataset["city"]["name"],
                "city_country": w_dataset["city"]["country"],
                "wind": w_dataset['list'][0]['wind']['speed'],
                "degree": w_dataset['list'][0]['wind']['deg'],
                "status": w_dataset['list'][0]['weather'][0]['description'],
                "cloud": w_dataset['list'][0]['clouds']['all'],
                'date': w_dataset['list'][0]["dt_txt"],
            }

            # Loop to handle multiple days' data
            for i in range(0, 7):
                context[f"date{i}"] = w_dataset['list'][i]["dt_txt"]
                context[f"temp_min{i}"] = math.floor(w_dataset["list"][i]["main"]["temp_min"] - 273.0)
                context[f"temp_max{i}"] = math.ceil(w_dataset["list"][i]["main"]["temp_max"] - 273.0)
                context[f"icon{i}"] = w_dataset["list"][i]["weather"][0]["icon"]
                context[f"pressure{i}"] = w_dataset["list"][i]["main"]["pressure"]
                context[f"humidity{i}"] = w_dataset["list"][i]["main"]["humidity"]
                context[f"sea_level{i}"] = w_dataset["list"][i]["main"]["sea_level"]
                context[f"weather{i}"] = w_dataset["list"][i]["weather"][0]["main"]
                context[f"description{i}"] = w_dataset["list"][i]["weather"][0]["description"]

            # Adding specific first day's data
            context["temp"] = round(w_dataset["list"][0]["main"]["temp"] - 273.0)
            context["wind"] = w_dataset['list'][0]['wind']['speed']
            context["degree"] = w_dataset['list'][0]['wind']['deg']
            context["weather0"] = w_dataset["list"][0]["weather"][0]["main"]

        except:
            context = {
                "city_name": "Not Found, Check your spelling..."
            }

        return render(request, 'weatherapp/resultl.html', context)
    else:
        return redirect('index')
