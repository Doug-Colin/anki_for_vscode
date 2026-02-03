# how_the_web_works

<!------------------------------------------------------------------------------------------- -->

## What is the internet?

The internet is a largely decentralized network of computers initially developed in the mid to late 1960's as an experimental network for sharing computer resources across locations.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What was the ARPANET?

%
The ARPANET (US military Advanced Research Projects Agency Network) was the first wide-area packet-switched network with distributed control and TCP/IP adoption; the telecommunicatons methods and protocols that would eventually serve as the foundation of today's internet.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is packet switching?

Packet switching is a networking method where data is split into small packets that are routed independently across a network.

[#packets]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a packet, or network packet?

A packet is the small, formatted, layered units of data used to transer information across the internet.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What are the layers of a network packet?

A network packet is a stack of nested data units, with each layer containing a protocol-specific header and the previous layer as payload.
[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## Are packet headers and HTTP headers the same?

%
No. HTTP headers belong to HTTP request/response messages at the application layer, while packet headers are transport and network layer headers (e.g., TCP and IP).

Packet headers get data delivered; HTTP headers tell the application what the data means.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## Which headers are typically called packet headers?

Packet headers usually refer to transport, network, and link-layer headers (e.g., TCP, IP, Ethernet), not application-layer headers.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a router?

A router is a device that forwards packets between different networks based on IP addresses.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a modem?

A modem translates data between formats readable by networked computers and formats suitable for transmissioin via telecom infrastructure.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is the difference between a web page, a website, a web app, and a web server?

A web page is a single document that can be displayed in the browser, whereas a website is a collection of pages grouped together; a webb app is a website that provides functionality to users beyond simply displaying information, and a web server is the computer that hosts any of the above on the internet.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a web browser?

A browser is a program that enables users to view, navigate, and interact with web documents; browsers are the most familiar type of user agent.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a client?

A client is any internet-detected devices that request data from somewhere; it can be a laptop, phone, tablet, a smart device, or in certain circumstances, even a server.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a server?

A server is a computer that stores data and responds to client devices requesting such data.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What are the two types of browser 'engine'?

Browsers have two types of engines: rendering engines and Javascript engines.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## Which rendering engines are used by the Chrome, Edge, Safari, and Firefox browsers?

Chrome and Edge use the Blink rendering engine, while Safari uses Apple's Webkit and Firefox uses Gecko.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What are the three primary JavaScript engines used by browsers?

Safari uses Apple's JavaScriptCore engine, while Chrome uses v8 and Mozilla (and thus Firefox) uses Spidermonkey as its JavaScript and WebAssembly engine.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a user agent?

A user agent is a computer program representing a person; the most common user agents are browsers operated by people, though user agents can also be bots scraping websites, download managers, or other apps accessing the web.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a user agent header?

%
A user agent header is a client HTTP request header that identifies the client application, OS, vendor, and or version.

Example in a client request:

```
GET /page.html HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0
```

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is TCP/IP?

Transission Control Protocol (TCP) and Internet Protocol (IP), commonly referred to as TCP/IP, are communication protocols that define how data should travel across the internet.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is DNS?

The Domain Name System (DNS) is the plain-language address book for websites; when you enter a URL into your browser's address or URL bar, the browser looks at the Domain Name System to find the websites Internet Protocol (IP) addresss.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a DNS lookup tool used for?

A Domain Name System (DNS) lookup tool is used for finding the IP address of a website given its plain-language web address.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a website?

A website is is a collection of web pages built from HTML, CSS, and JavaScript code, which the browser interprets and assembled into a web page to display to a user.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What are the types of

A website is is a collection of web pages built from HTML, CSS, and JavaScript code, which the browser interprets and assembled into a web page to display to a user.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## Technically, what happens when a user enters a web address into the url or address bar of a browser?

- First, the browser must find the 'actual' IP address corresponding to the web address in the url, so the browser sends a DNS query to the DNS server, which responds with the IP address.
- Now that the browser has the IP address, it sends an HTTP request for a copy of the website (or other resoure)
- The server responds with the status of the client's HTTP request; if 200 OK or similar, it begins sending packets of the website's files to the client browser.
- The browser assembles the packets into a complete web page and renders it.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a URL?

A Uniform Resource Locator (URL) is a text string that specifies where a resource can be found on the internet.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## ## What are the components of a URL?

A Uniform Resource Locator consists of a protocol (http/https), a domain name, and the path to the resource at that domain.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a web address?

A web address is the non-protocol part of a URL (Uniform Resource Locator); it contains the domain name and the path to the resource at that domain.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is HTTP?

Hypertext Transfer Protocol (HTTP) is the set of rules defining the format of client and server communication.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is HTTPS?

Hypertext Transfer Protocol Secure (HTTPS) is a version of HTTP that secures client-server communications from eavesdropping and manipulation via TLS (Transport Layer Security) encryption.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is TLS?

Transport Layer Security (TLS) is a protocol enabling applications to communicate secures across networks using defined methods of authentication, encryption, and data integrity. While most commonly used for HTTPS comms, TLS is also used to secure email, instant messaging, and VOIP communications.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is SSL?

Secure Sockets Layer (SSL) is a now-deprecated security protocol that was used for HTTPS communications prior to full TSL (Transport Security Layer) adoption in the mid 2010s.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is an HTTP response status code?

HTTP response status codes are three digit codes included by serers responding to client HTTP requests; the codes indicate specific states of success and or failure.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What are the five types, or groups, of HTTP response status codes?

The five types, or groups, of HTTP response status codes are:

- Informational (100-199)
- Succesfull (200-299)
- Redirectional (300-399)
- Client Error (400-499)
- Server Error (500-599)

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->
