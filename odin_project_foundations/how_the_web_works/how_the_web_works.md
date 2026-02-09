# how_the_web_works

<!------------------------------------------------------------------------------------------- -->

## What is the internet?

<!-- notecardId: 1770140547021 -->

A packet-switching decentralized network of computers.

_Note_: Initially developed in the mid to late 1960's as an experimental network for sharing computer resources across locations.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What was the ARPANET?

<!-- notecardId: 1770140547023 -->

%
The precursor to and foundation of the internet; ARPANET was the first wide-area, packet-switching, distributed control network using TCP/IP.

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

The small unit by which data travels across the internet; packets are formatted in layers according to the protocols that standardize internet communications.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is packet encapsulation?

<!-- notecardId: 1770140547026 -->

Packet encapsulation refers to the nesting of packet data by protocol layer; each layer adds its header and wraps the layer above as payload, separating concerns (routing, reliability, delivery).

Ethernet wraps IP, IP wraps TCP, TCP wraps application layer data.

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

The headers specified by lower-level protocols at the data link, network, and transport layers (e.g., Ethernet/Wi-Fi, IP, and TCP headers respectively).
[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a router?

<!-- notecardId: 1770140547029 -->

A device that forwards packets between network nodes by IP address.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a modem?

<!-- notecardId: 1770140547030 -->

A modem translates data between computer-readable and telecom infrastructure formats.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is the difference between a web page, website, web app, and web server?

<!-- notecardId: 1770140547031 -->

A **web page** ia any HTML-based document rendered in a browser, usually with the help of CSS & JS files,
a **website** is collection of related web pages,  
a **web app** is a site providing interactive utility, or web based application, and
a **web server** is computer hosting and serving these resources to clients over the internet.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a web browser?

<!-- notecardId: 1770140547032 -->

Program that enables users to view, navigate, and interact with web documents.

_Note_: Browsers are the most familiar type of user agent.

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

## What are the three primary engines used by browsers for JavaScript?

<!-- notecardId: 1770140547037 -->

Chrome uses v8, Mozilla uses Spidermonkey, and Safari/Apple use JavacriptCore.

_Note_: All three now also support WebAssembly; SpiderMonkey was first JavaScript engine (created by Brendan Eich in 1995).

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a user agent?

<!-- notecardId: 1770140547038 -->

Any program that displays, navigates, and interacts with web docs; could be a browser, scraper, or other app.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is a user agent header?

<!-- notecardId: 1770140547039 -->

%
HTTP request header that identifies client's browser, OS, and version.

Example: `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0`
_Note: "Mozilla/5.0" appears in all modern browsers for legacy compatibility:_

```
Mozilla/5.0          ← Everyone claims this (legacy compatibility)
Windows NT 10.0      ← Actual OS
Chrome/120.0.0.0     ← Actual browser version
```

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What are TCP/IP?

<!-- notecardId: 1770140547040 -->

The Transmission Control Protocol (TCP) and Internet Protocol (IP), respectively, are the comms protocols defining how packets are _transported_ and _routed_ across the internet.

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

Secure version of the HTTP protocol that uses TLS encryption to prevent eavesdropping & manipulation of client-server communications.

(TLS is _Transport Layer Security_)

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is TLS?

<!-- notecardId: 1770140547051 -->

Transport Layer Security; a protocol for encrypting and authenticating network communications.

_Note_: TLS doesn't only HTTPS; it also secures email, messaging, and VoIP.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What is SSL?

<!-- notecardId: 1770140547052 -->

Secure Sockets Layer; the now-deprecated security protocol used in HTTPS prior to browsers fully adopting TSL in mid 2010s.

_Note_:TSL security protocol layer of of HTTPS means Transport Security Layer.

[#]() [#]() [#]()

<!------------------------------------------------------------------------------------------- -->

## What are HTTP response status codes?

<!-- notecardId: 1770140547053 -->

Three-digit codes servers send before response data, indicating request outcome: success (`200` OK), redirection (`301`), client error (`404` Not Found, resource doesn't exist), or server error (`503` Service Unavailable, server overloaded/in maintenance).

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

## Why does the server send a status code before sending website files?

<!-- notecardId: 1770399465531 -->

So the client doesn't waste resources unnecessarily processing a body; `404` means don't bother processing the body (whether HTML, image, or PDF); `301` means fetch from a different URL instead; `304` means use your cached version.

<!------------------------------------------------------------------------------------------- -->

## Why is website data sent as packets instead of one complete file?

<!-- notecardId: 1770399465532 -->

Small packets allow failed pieces to resend individually, improving reliability

<!------------------------------------------------------------------------------------------- -->

## Generally, in IT context, what does the term 'query' mean?

<!-- notecardId: 1770399465533 -->

Any requests for systems to look up and return information.

<!------------------------------------------------------------------------------------------- -->

## Walk through packet encapsulation for an HTTPS request.

<!-- notecardId: 1770508135797 -->

Application creates HTTP request → TLS encrypts it → TCP adds reliability headers (sequence numbers, ports) → IP adds routing headers (source/dest addresses) → Ethernet adds local delivery headers (MAC addresses).

At destination, each layer strips its header and passes payload up.
