<!-- Web infrastructure: a deck for things you encounter but do not build  -->

## What does DNS stand for?

<!-- notecardId: 1770401009069 -->

Domain Name System

<!------------------------------------------------------------------------------------------- -->

## What does a DNS resolver do?

<!-- notecardId: 1770401009070 -->

Looks up the IP address for a domain name on your behalf

<!------------------------------------------------------------------------------------------- -->

## Who typically runs DNS resolvers?

<!-- notecardId: 1770401009071 -->

ISPs, or public services like Google (8.8.8.8) and Cloudflare (1.1.1.1)

<!------------------------------------------------------------------------------------------- -->

## What transport protocol do DNS queries typically use?

<!-- notecardId: 1770401009072 -->

UDP (fast, lightweight, no connection overhead)

<!------------------------------------------------------------------------------------------- -->

## At which layer of the OSI/TCP-IP model does DNS operate?

<!-- notecardId: 1770401009073 -->

Application layer

<!------------------------------------------------------------------------------------------- -->

## What's the difference between a DNS resolver and a domain registrar?

<!-- notecardId: 1770401009074 -->

Resolver looks up records; registrar is where domain ownership and records are registered

<!------------------------------------------------------------------------------------------- -->

## Why do we need DNS at all?

<!-- notecardId: 1770401009075 -->

Humans remember names (google.com); networks route by IP addresses — DNS bridges the gap

<!------------------------------------------------------------------------------------------- -->

## Why do DNS queries use UDP instead of TCP?

<!-- notecardId: 1770401009076 -->

DNS lookups are small and fast — UDP skips connection overhead; if it fails, just retry

<!------------------------------------------------------------------------------------------- -->

## Why don't browsers query the DNS system directly?

<!-- notecardId: 1770401009077 -->

DNS is a distributed hierarchy — resolvers handle the complexity of navigating it

<!------------------------------------------------------------------------------------------- -->

## What is DNS caching?

<!-- notecardId: 1770401009078 -->

Storing a DNS lookup result locally so repeated requests don't hit the resolver again

<!------------------------------------------------------------------------------------------- -->

## Where does DNS caching happen?

<!-- notecardId: 1770401009079 -->

Browser, operating system, and resolver — multiple layers can cache

<!------------------------------------------------------------------------------------------- -->

## What is TTL in DNS?

<!-- notecardId: 1770401009080 -->

Time To Live — how long (in seconds) a DNS record can be cached before it must be refreshed

<!------------------------------------------------------------------------------------------- -->

## Why does TTL matter for web developers?

<!-- notecardId: 1770401009081 -->

After changing DNS records, users won't see the change until old cached records expire

<!------------------------------------------------------------------------------------------- -->

## What is a DNS A record?

<!-- notecardId: 1770401009082 -->

Maps a domain name to an IPv4 address

<!------------------------------------------------------------------------------------------- -->

## What is a DNS AAAA record?

<!-- notecardId: 1770401009083 -->

Maps a domain name to an IPv6 address

<!------------------------------------------------------------------------------------------- -->

## What is a DNS CNAME record?

<!-- notecardId: 1770401009084 -->

Maps a domain name to another domain name (an alias)

<!------------------------------------------------------------------------------------------- -->

## When would you use a CNAME record?

<!-- notecardId: 1770401009085 -->

Pointing a subdomain (like www.example.com) to another domain (like example.com or a CDN)

<!------------------------------------------------------------------------------------------- -->

## What is a DNS MX record?

<!-- notecardId: 1770401009086 -->

Specifies the mail server responsible for receiving email for a domain

<!------------------------------------------------------------------------------------------- -->

## What is a DNS TXT record?

<!-- notecardId: 1770401009087 -->

Holds arbitrary text — often used for domain verification or email security (SPF, DKIM)

<!------------------------------------------------------------------------------------------- -->

## What are the two main models for understanding network communication layers?

<!-- notecardId: 1770401009088 -->

OSI model (7 layers) and TCP/IP model (4 layers)

<!------------------------------------------------------------------------------------------- -->

## What's the key difference between OSI and TCP/IP models?

<!-- notecardId: 1770401009089 -->

OSI is a theoretical teaching model (7 layers); TCP/IP is the practical model matching how the internet actually works (4 layers)

<!------------------------------------------------------------------------------------------- -->

## What are the 7 layers of the OSI model? (top to bottom)

<!-- notecardId: 1770401009090 -->

Application, Presentation, Session, Transport, Network, Data Link, Physical

<!------------------------------------------------------------------------------------------- -->

## What are the 4 layers of the TCP/IP model? (top to bottom)

<!-- notecardId: 1770401009091 -->

Application, Transport, Internet, Network Access (Link)

<!------------------------------------------------------------------------------------------- -->

## How does TCP/IP's Application layer relate to OSI?

<!-- notecardId: 1770401009092 -->

TCP/IP's Application layer combines OSI's top three: Application, Presentation, and Session

<!------------------------------------------------------------------------------------------- -->

## How does TCP/IP's Network Access layer relate to OSI?

<!-- notecardId: 1770401009093 -->

TCP/IP's Network Access (Link) layer combines OSI's bottom two: Data Link and Physical

<!------------------------------------------------------------------------------------------- -->

## What are 8.8.8.8 and 1.1.1.1?

<!-- notecardId: 1770401009094 -->

Public DNS resolver addresses — Google (8.8.8.8) and Cloudflare (1.1.1.1)

<!------------------------------------------------------------------------------------------- -->

## Why would a developer configure a computer or router to use 8.8.8.8 or 1.1.1.1 instead of their ISP's DNS?

<!-- notecardId: 1770401009095 -->

Speed, privacy, reliability, or bypassing ISP filtering/blocking

<!------------------------------------------------------------------------------------------- -->

## What are the two most consistently used definitions of the term runtime?

The term "runtime" refers to either _the system supporting program execution_ or _the time during a program's execution_.

_Note_: "Node runtime" = JS engine + APIs + event loop. "At runtime" = when code executes (vs. before runtime: build-time, type-check time, etc.).

<!------------------------------------------------------------------------------------------- -->
