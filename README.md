# weatherDetails

I have created a weather application with Angular 12 version with rxjs operators and material UI angular.
on running the application use has to check for localhost:4200/weather-check to view the page.

![landing_page](https://user-images.githubusercontent.com/75521816/137730628-b9066c4b-0010-458e-b388-f104fcae209c.png)

Here, we can see, the left corner, current time and date fields..At the center of the page, we have used material UI mat tags to createe an search bar.
On typing an city value in the search bar, an openWeatherAPI is getting called in the network tab and corresponding city weather details are popped as a response.
currently, I am showing Humidity, pressure and temperature of the typedd in city.

![weatheer_details_city](https://user-images.githubusercontent.com/75521816/137731287-1f0b5644-c786-4c0f-b1d2-135ba1913b7f.png)

For suppose, if an wrong city name was entered, I have provided an error message which was handled at the error block of the API.
and if the API was showing error response then, I am popping an error message at the bottom of the search bar and I am clearing the value in the search bar too.

![weatheer_details_error](https://user-images.githubusercontent.com/75521816/137731658-5d5e03de-1551-43d9-a189-8125314ba65c.png)

I have used the bootstrap classes to makee the pagee responsive as well.
![weatheer_details_responsive](https://user-images.githubusercontent.com/75521816/137731910-3ecfc47b-1452-4bf7-bc54-41bf8c2e5df3.png)

Iphonee

![weatheer_details_responsive_iphone](https://user-images.githubusercontent.com/75521816/137732233-8db0b8ae-13ab-4fd0-8c03-562e33abf526.png)
