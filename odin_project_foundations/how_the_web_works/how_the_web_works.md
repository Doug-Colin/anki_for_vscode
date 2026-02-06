# how_the_web_works

<!------------------------------------------------------------------------------------------- -->

## What is the internet?

<!-- notecardId: 1770140547021 -->

The internet is a largely decentralized network of computers initially developed in the mid to late 1960's as an experimental network for sharing computer resources across locations.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What was the ARPANET?

<!-- notecardId: 1770140547023 -->

%
The ARPANET (US military Advanced Research Projects Agency Network) was the first wide-area packet-switched network with distributed control and TCP/IP adoption; the telecommunicatons methods and protocols that would eventually serve as the foundation of today's internet.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is packet switching?

<!-- notecardId: 1770140547024 -->

Packet switching is a networking method where data is split into small packets that are routed independently across a network.

[#packets]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a packet, or network packet?

<!-- notecardId: 1770140547025 -->

A packet is the small, formatted, layered units of data used to transer information across the internet.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What are the layers of a network packet?

<!-- notecardId: 1770140547026 -->

A network packet is a stack of nested data units, with each layer containing a protocol-specific header and the previous layer as payload.
[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## Are packet headers and HTTP headers the same?

<!-- notecardId: 1770140547027 -->

%
No. HTTP headers belong to HTTP request/response messages at the application layer, while packet headers are transport and network layer headers (e.g., TCP and IP).

Packet headers get data delivered; HTTP headers tell the application what the data means.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## Which headers are typically called packet headers?

<!-- notecardId: 1770140547028 -->

Packet headers usually refer to transport, network, and link-layer headers (e.g., TCP, IP, Ethernet), not application-layer headers.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a router?

<!-- notecardId: 1770140547029 -->

A router is a device that forwards packets between different networks based on IP addresses.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a modem?

<!-- notecardId: 1770140547030 -->

A modem translates data between formats readable by networked computers and formats suitable for transmissioin via telecom infrastructure.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is the difference between a web page, a website, a web app, and a web server?

<!-- notecardId: 1770140547031 -->

A web page is a single document that can be displayed in the browser, whereas a website is a collection of pages grouped together; a webb app is a website that provides functionality to users beyond simply displaying information, and a web server is the computer that hosts any of the above on the internet.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a web browser?

<!-- notecardId: 1770140547032 -->

A browser is a program that enables users to view, navigate, and interact with web documents; browsers are the most familiar type of user agent.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a client?

<!-- notecardId: 1770140547033 -->

A client is any internet-detected devices that request data from somewhere; it can be a laptop, phone, tablet, a smart device, or in certain circumstances, even a server.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a server?

<!-- notecardId: 1770140547034 -->

A server is a computer that stores data and responds to client devices requesting such data.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What are the two types of browser 'engine'?

<!-- notecardId: 1770140547035 -->

Browsers have two types of engines: rendering engines and Javascript engines.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## Which rendering engines are used by the Chrome, Edge, Safari, and Firefox browsers?

<!-- notecardId: 1770140547036 -->

Chrome and Edge use the Blink rendering engine, while Safari uses Apple's Webkit and Firefox uses Gecko.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What are the three primary JavaScript engines used by browsers?

<!-- notecardId: 1770140547037 -->

Safari uses Apple's JavaScriptCore engine, while Chrome uses v8 and Mozilla (and thus Firefox) uses Spidermonkey as its JavaScript and WebAssembly engine.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a user agent?

<!-- notecardId: 1770140547038 -->

A user agent is a computer program representing a person; the most common user agents are browsers operated by people, though user agents can also be bots scraping websites, download managers, or other apps accessing the web.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a user agent header?

<!-- notecardId: 1770140547039 -->

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

<!-- notecardId: 1770140547040 -->

Transission Control Protocol (TCP) and Internet Protocol (IP), commonly referred to as TCP/IP, are communication protocols that define how data should travel across the internet.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is DNS?

<!-- notecardId: 1770140547041 -->

The Domain Name System (DNS) is the plain-language address book for websites; when you enter a URL into your browser's address or URL bar, the browser looks at the Domain Name System to find the websites Internet Protocol (IP) addresss.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a DNS lookup tool used for?

<!-- notecardId: 1770140547042 -->

A Domain Name System (DNS) lookup tool is used for finding the IP address of a website given its plain-language web address.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a website?

<!-- notecardId: 1770140547043 -->

A website is is a collection of web pages built from HTML, CSS, and JavaScript code, which the browser interprets and assembled into a web page to display to a user.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What are the types of

<!-- notecardId: 1770140547044 -->

A website is is a collection of web pages built from HTML, CSS, and JavaScript code, which the browser interprets and assembled into a web page to display to a user.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## At a high level, what are the 4 phases by which a URL entered into a browser becomes a user visible webpage?

<!-- notecardId: 1770140547045 -->

DNS lookup → HTTP request → Status response → Packets sent, assembled, rendered.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a URL?

<!-- notecardId: 1770140547046 -->

Uniform Resource Locator; a text string that specifies where a resource can be found on the internet.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## At a high level, What are the components of a URL?

<!-- notecardId: 1770140547047 -->

A Uniform Resource Locator consists of a protocol (http/https), a domain name, and the path to the resource at that domain.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a web address?

<!-- notecardId: 1770140547048 -->

A web address is the non-protocol part of a URL (Uniform Resource Locator); it contains the domain name and the path to the resource at that domain.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is HTTP?

<!-- notecardId: 1770140547049 -->

Hypertext Transfer Protocol (HTTP) is the set of rules defining the format of client and server communication.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is HTTPS?

<!-- notecardId: 1770140547050 -->

Hypertext Transfer Protocol Secure (HTTPS) is a version of HTTP that secures client-server communications from eavesdropping and manipulation via TLS (Transport Layer Security) encryption.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is TLS?

<!-- notecardId: 1770140547051 -->

Transport Layer Security (TLS) is a protocol enabling applications to communicate secures across networks using defined methods of authentication, encryption, and data integrity. While most commonly used for HTTPS comms, TLS is also used to secure email, instant messaging, and VOIP communications.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is SSL?

<!-- notecardId: 1770140547052 -->

Secure Sockets Layer (SSL) is a now-deprecated security protocol that was used for HTTPS communications prior to full TSL (Transport Security Layer) adoption in the mid 2010s.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is an HTTP response status code?

<!-- notecardId: 1770140547053 -->

HTTP response status codes are three digit codes included by servers responding to client HTTP requests; the codes indicate specific states of success and or failure.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What are the five types, or groups, of HTTP response status codes?

<!-- notecardId: 1770140547054 -->

The five types, or groups, of HTTP response status codes are:

- Informational (100-199)
- Succesfull (200-299)
- Redirectional (300-399)
- Client Error (400-499)
- Server Error (500-599)

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## When a user enters a URL, what must the browser do FIRST before it can request the resource?

Resolve the web address to an IP address by querying the DNS resolver.

<!------------------------------------------------------------------------------------------- -->

## Why must the browser get an IP address before requesting a website or other resources via HTTP?

Because devices route internet data using IP addresses, not human-readable urls.

<!------------------------------------------------------------------------------------------- -->

## After getting the IP address from the DNS resolver, what does the browser do next?

Sends an HTTP request to that IP address.

<!------------------------------------------------------------------------------------------- -->

## After receiving an HTTP request, what does the server first respond with?

An HTTP request status code (e.g., 200 OK)

<!------------------------------------------------------------------------------------------- -->

## After a 200 OK, how does the website data get to the browser?

Server sends packets → browser assembles and renders them.

<!------------------------------------------------------------------------------------------- -->

## Why does the browser send an HTTP request instead of just receiving data?

Web is request-response — servers only send what clients explicitly ask for

<!------------------------------------------------------------------------------------------- -->

## Why does the server send a status code before the website files?

Client needs to know if request succeeded/failed before processing data

<!------------------------------------------------------------------------------------------- -->

## Why is website data sent as packets instead of one complete file?

Small packets allow failed pieces to resend individually, improving reliability

<!------------------------------------------------------------------------------------------- -->

## Generally, in IT context, what does the term 'query' mean?

Any request that asks a system to look up and return information.
