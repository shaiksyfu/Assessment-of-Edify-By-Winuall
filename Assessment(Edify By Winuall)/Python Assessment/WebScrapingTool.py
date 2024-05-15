import requests
from bs4 import BeautifulSoup
import csv

url = "https://example.com"

try:
    response = requests.get(url)
    soup = BeautifulSoup(response.content, "html.parser")

    data = []
    for item in soup.find_all("item"):
        title = item.find("title").text
        link = item.find("link").text
        pub_date = item.find("pubDate").text
        author = item.find("creator").text
        data.append([title, link, pub_date, author])

    with open("output.csv", "w", newline="") as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(["Title", "Link", "Publication Date", "Author"])
        writer.writerows(data)

except requests.exceptions.RequestException as e:
    print("An error occurred while making the request:", e)
except Exception as e:
    print("An error occurred:", e)

print("Data extracted and stored in output.csv")