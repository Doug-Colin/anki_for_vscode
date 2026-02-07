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
The foundation of the internet; the first broad, packet-switching, distributed control, TCP/IP using network.

ARPANET: _Advanced Research Projects Agency NETwork_
ARPA: pre-DOD DARPA

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is packet switching?

<!-- notecardId: 1770140547024 -->

Packet switching is a networking method where data is split into small packets that are routed independently across a network.

[#packets]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a packet, or network packet?

<!-- notecardId: 1770140547025 -->

The small, formatted, multi-layered unit of data sent across the internet.

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
No. Packet headers are network/transport layers (TCP/IP); HTTP headers are application layer.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## Which headers are typically called packet headers?

<!-- notecardId: 1770140547028 -->

Lower level transport, network, and link-layer headers (TC/IP, Ethernet).

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a router?

<!-- notecardId: 1770140547029 -->

A router is a device that forwards packets between network nodes by IP address.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a modem?

<!-- notecardId: 1770140547030 -->

A modem translates data between computer-readable and telecom infrastructure formats.

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

Javascript engines and rendering engines.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## Which rendering engines are used by the Chrome, Edge, Safari, and Firefox browsers?

<!-- notecardId: 1770140547036 -->

Chrome and Edge use the Blink rendering engine, while Safari uses Apple's Webkit and Firefox uses Gecko.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What are the three primary JavaScript engines used by browsers?

<!-- notecardId: 1770140547037 -->

Chrome uses v8, Safari/Apple use JavacriptCore, and Mozilla uses Spidermonkey.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a user agent?

<!-- notecardId: 1770140547038 -->

Any browser, scraper, or other program that displays, navigates, and interacts with web docs.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a user agent header?

<!-- notecardId: 1770140547039 -->

%
HTTP request header that identifies client's browser, OS, and version.

Example: `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0`

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is TCP/IP?

<!-- notecardId: 1770140547040 -->

Transmission Control Protocol (TCP) and Internet Protocol (IP), commonly referred to as TCP/IP, are communication protocols that define how data should travel across the internet.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is DNS?

<!-- notecardId: 1770140547041 -->

The Domain Name System (DNS) is the plain-language address book for websites; when you enter a URL into your browser's address or URL bar, the browser looks at the Domain Name System to find the websites Internet Protocol (IP) address.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What's a DNS lookup tool used for?

<!-- notecardId: 1770140547042 -->

DNS lookup tools let you _manually_ find a domain name's IP address.

Note: DNS lookup tools are usually CLI tools like dig or nslookup, NOT the DNS resolver service of your ISP/Google/Cloudflare.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a website?

<!-- notecardId: 1770140547043 -->

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

Scheme (protocol), domain, path.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a web address?

<!-- notecardId: 1770140547048 -->

The domain name and the path part of a URL.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is HTTP?

<!-- notecardId: 1770140547049 -->

Hypertext Transfer Protocol (HTTP) is the set of rules defining the format of client and server communication.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is HTTPS?

<!-- notecardId: 1770140547050 -->

HTTP Secure; uses TLS encryption to prevent eavesdropping & manipulation of client-server communications.

(TLS is _Transport Layer Security_)

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

Three digit success/failure codes servers respond to client HTTP requests with.

Example: 200 OK, 404 NOT FOUND etcetera.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What are the five types, or groups, of HTTP response status codes?

<!-- notecardId: 1770140547054 -->

The five types, or groups, of HTTP response status codes are:

- Informational (100-199)
- Successful (200-299)
- Redirectional (300-399)
- Client Error (400-499)
- Server Error (500-599)

_Remember:_ ISRDC. Info - Success - Redirect - Client - Server errors

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## When a user enters a URL, what must the browser do FIRST before it can request the resource?

<!-- notecardId: 1770399465522 -->

Resolve the web address to an IP address by querying the DNS resolver.

<!------------------------------------------------------------------------------------------- -->

## Why must the browser get an IP address before requesting a website or other resources via HTTP?

<!-- notecardId: 1770399465524 -->

Because devices route internet data using IP addresses, not human-readable urls.

<!------------------------------------------------------------------------------------------- -->

## After getting the IP address from the DNS resolver, what does the browser do next?

<!-- notecardId: 1770399465525 -->

Sends an HTTP request to that IP address.

<!------------------------------------------------------------------------------------------- -->

## After receiving an HTTP request, what does the server first respond with?

<!-- notecardId: 1770399465527 -->

An HTTP request status code (e.g., 200 OK)

<!------------------------------------------------------------------------------------------- -->

## After a 200 OK, how does the website data get to the browser?

<!-- notecardId: 1770399465528 -->

Server sends packets → browser assembles and renders them.

<!------------------------------------------------------------------------------------------- -->

## Why does the browser send an HTTP request instead of just receiving data?

<!-- notecardId: 1770399465529 -->

Web is request-response — servers only send what clients explicitly ask for

<!------------------------------------------------------------------------------------------- -->

## Why does the server send a status code before the website files?

<!-- notecardId: 1770399465531 -->

Client needs to know if request succeeded/failed before processing data

<!------------------------------------------------------------------------------------------- -->

## Why is website data sent as packets instead of one complete file?

<!-- notecardId: 1770399465532 -->

Small packets allow failed pieces to resend individually, improving reliability

<!------------------------------------------------------------------------------------------- -->

## Generally, in IT context, what does the term 'query' mean?

<!-- notecardId: 1770399465533 -->

Any requests for systems to look up and return information.
