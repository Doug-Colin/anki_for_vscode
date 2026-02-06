<!-- Web infrastructure: a deck for things you encounter but do not build  -->

## What does DNS stand for?

Domain Name System

<!------------------------------------------------------------------------------------------- -->

## What does a DNS resolver do?

Looks up the IP address for a domain name on your behalf

<!------------------------------------------------------------------------------------------- -->

## Who typically runs DNS resolvers?

ISPs, or public services like Google (8.8.8.8) and Cloudflare (1.1.1.1)

<!------------------------------------------------------------------------------------------- -->

## What transport protocol do DNS queries typically use?

UDP (fast, lightweight, no connection overhead)

<!------------------------------------------------------------------------------------------- -->

## At which layer of the OSI/TCP-IP model does DNS operate?

Application layer

<!------------------------------------------------------------------------------------------- -->

## What's the difference between a DNS resolver and a domain registrar?

Resolver looks up records; registrar is where domain ownership and records are registered

<!------------------------------------------------------------------------------------------- -->

## Why do we need DNS at all?

Humans remember names (google.com); networks route by IP addresses — DNS bridges the gap

<!------------------------------------------------------------------------------------------- -->

## Why do DNS queries use UDP instead of TCP?

DNS lookups are small and fast — UDP skips connection overhead; if it fails, just retry

<!------------------------------------------------------------------------------------------- -->

## Why don't browsers query the DNS system directly?

DNS is a distributed hierarchy — resolvers handle the complexity of navigating it

<!------------------------------------------------------------------------------------------- -->

## What is DNS caching?

Storing a DNS lookup result locally so repeated requests don't hit the resolver again

<!------------------------------------------------------------------------------------------- -->

## Where does DNS caching happen?

Browser, operating system, and resolver — multiple layers can cache

<!------------------------------------------------------------------------------------------- -->

## What is TTL in DNS?

Time To Live — how long (in seconds) a DNS record can be cached before it must be refreshed

<!------------------------------------------------------------------------------------------- -->

## Why does TTL matter for web developers?

After changing DNS records, users won't see the change until old cached records expire

<!------------------------------------------------------------------------------------------- -->

## What is a DNS A record?

Maps a domain name to an IPv4 address

<!------------------------------------------------------------------------------------------- -->

## What is a DNS AAAA record?

Maps a domain name to an IPv6 address

<!------------------------------------------------------------------------------------------- -->

## What is a DNS CNAME record?

Maps a domain name to another domain name (an alias)

<!------------------------------------------------------------------------------------------- -->

## When would you use a CNAME record?

Pointing a subdomain (like www.example.com) to another domain (like example.com or a CDN)

<!------------------------------------------------------------------------------------------- -->

## What is a DNS MX record?

Specifies the mail server responsible for receiving email for a domain

<!------------------------------------------------------------------------------------------- -->

## What is a DNS TXT record?

Holds arbitrary text — often used for domain verification or email security (SPF, DKIM)

<!------------------------------------------------------------------------------------------- -->

## What are the two main models for understanding network communication layers?

OSI model (7 layers) and TCP/IP model (4 layers)

<!------------------------------------------------------------------------------------------- -->

## What's the key difference between OSI and TCP/IP models?

OSI is a theoretical teaching model (7 layers); TCP/IP is the practical model matching how the internet actually works (4 layers)

<!------------------------------------------------------------------------------------------- -->

## What are the 7 layers of the OSI model? (top to bottom)

Application, Presentation, Session, Transport, Network, Data Link, Physical

<!------------------------------------------------------------------------------------------- -->

## What are the 4 layers of the TCP/IP model? (top to bottom)

Application, Transport, Internet, Network Access (Link)

<!------------------------------------------------------------------------------------------- -->

## How does TCP/IP's Application layer relate to OSI?

TCP/IP's Application layer combines OSI's top three: Application, Presentation, and Session

<!------------------------------------------------------------------------------------------- -->

## How does TCP/IP's Network Access layer relate to OSI?

TCP/IP's Network Access (Link) layer combines OSI's bottom two: Data Link and Physical

<!------------------------------------------------------------------------------------------- -->

## What are 8.8.8.8 and 1.1.1.1?
Public DNS resolver addresses — Google (8.8.8.8) and Cloudflare (1.1.1.1)

<!------------------------------------------------------------------------------------------- -->

## Why would a developer configure a computer or router to use 8.8.8.8 or 1.1.1.1 instead of their ISP's DNS?
Speed, privacy, reliability, or bypassing ISP filtering/blocking

<!------------------------------------------------------------------------------------------- -->