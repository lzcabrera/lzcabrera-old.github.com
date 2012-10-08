---
layout: post
title: "RSS vs. Atom"
---
Both Atom and RSS (Really Simple Syndication) are used as web syndication formats for online activities involving periodic updates.<br />
<br />
The creation of the Atom syndication format in 2003 was in part motivated by a desire to get a clean start free of the standardization and copyright issues surrounding RSS since 1999.<br />
<br />
What they have in common is that they are xml files used for the same purposes. And the main differences are:<br />
<ul><li>RSS 2.0 may contain either plain text or escaped HTML as a payload, with no way to indicate which of the two is provided. Atom, on the other hand, provides a mechanism to explicitly and unambiguously label the type of content being provided by the entry, and allows for a broad variety of payload types including plain text, escaped HTML, XHTML, XML, Base64-encoded binary, and references to external content such as documents, video, audio streams, and so forth.</li>
<li>The RSS 2.0 specification relies on the use of <a href="http://www.w3.org/Protocols/rfc822/">RFC 822</a> formatted timestamps to communicate information about when items in the feed were created and last updated. Atom uses timestamps formatted according to the rules specified by <a href="http://tools.ietf.org/html/rfc3339">RFC 3339</a> (which is a subset of <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a>).</li>
<li>While the RSS vocabulary has a mechanism to indicate a language for the feed, there is no means by which a language for individual items or text elements can be specified. Atom, on the other hand, uses the standardized xml:lang attribute to make it possible to specify a language context for every piece of human readable content in the feed.</li>
<li>Atom supports the use of Internationalized Resource Identifiers, which allow links to resources and unique identifiers to contain characters outside the US ASCII character set.</li>
<li>The elements of the RSS vocabulary are not generally reusable in other XML vocabularies. The Atom syntax was specifically designed to allow elements to be reused outside the context of an Atom feed document.</li>
</ul><p>Source: <a href="http://en.wikipedia.org/wiki/Atom_%28standard%29">Atom compared to RSS 2.0</a></p>