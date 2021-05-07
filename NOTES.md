# EPR front-end Notes

### Incoming Referrals

The starting point for this MVP is the list of Incoming  Referrals i.e. a list off all the **referred and triaged** patients.
It has been agreed that this is a list of firts time patients, i.e. patients that need an appointment regardless the number of conditions they have been referred for (a patient can been referred for more than one condition).

The list will show:

* Name
* NHS number
* Triaged diagnosis
* Referring optometrist
* Priority
* Diagnostic test (bool)
* Referral creation date
* Post code

> Add an option to export the table as CSV


The table component will allow the user to **search** for Name / NHS Number and to **sort** for multiple keys.

It will be possible to pick a Clinic and have the patients sorted by proximity to that location

---

## Bing APIs
In some occasion it would be necessary to sort data by distance, i.e. distance between two post-codes.
One posible solution is to make use of the [Bing APIs](https://docs.microsoft.com/en-us/bingmaps/rest-services/) as the free tier seems to be fairly generous.

I.e. to calculate the distance between two postcode (waypoints) we can hit the following end-point

`http://dev.virtualearth.net/REST/V1/Routes/Driving?wp.0=n87bt&wp.1=n87jn&key=<KEY>`

where wp.0 and wp.1 are the two post-codes.

---

### Patient details
Selecting a patient from the initial table gets us to the **patient details** page.
Here we can also see a list of possible special requirements for that patient, as well as the list of previous appointments.
At some point it was suggested that whenever a patient has special requirements then the appointment duration time should be programmatically doubled.
This feature is currently under consideration and it's not been confirmed as yet.

Clicking on **Book initial appointment** should "lock" the patient so to avoid any double-booking risk.


### Choosing a Time and Location
To select the time and location for an appointment we could decide to sort the available options by space or time.

The first tab sorts them by space, showing the closest clinics that provide the service the patient needs while the second tab gives time priority showing the next available slots first.


> Showing only the Locations offering the required service