# Tori.fi & huuto.net API

A simple API to scrape JSON data from huuto.net and tori.fi about sales listings


## Usage/Examples

```
.../{tori/huuto/kaikki}/{searchword}/{county} (optional)
```

For example searching for "jarrupala" from tori.fi with no area restriction:

```
.../tori/jarrupala
```

Searching for "jarrupala" from huuto.net in Uusimaa county:

```
.../huuto/jarrupala/uusimaa
```

Searching for "aku ankka" from both sites in Satakunta county:

```
.../kaikki/aku ankka/satakunta
```

## Results

API returns a JSON where each element contains attributes text, url and site as strings

Example:
```
{
text: "Kakka-hätä 77 - Huoltoasemalle unohdettu mies LP",
url: "https://www.huuto.net/kohteet/kakka-hata-77---huoltoasemalle-unohdettu-mies-lp/572175883",
site: "huuto.net"
}
```

If errors occour or no results with given terms are found, a empty JSON is returned.
