#How to run a mail service for a bussiness
##Mail Security
###Send bussiness email
Every business need an Email system to send invoice, quote, design, promotion information and etc. Their requirement for email system includes two key element: cheaper and reliable.

#### Economic emails service
Most expensive solution for a email system is to rent an on-premise SMTP server, it costs from 200 dollars per month mostly. If you need to send large amount of Emails say millions or hundred thousands , it is a good choice since it is most reliable, usually the SP will properly configure it so it has most chance to go into customers' inbox.

Another solution is using a cloud service such as emailjs, sendgrid, mailgun or mailchimp. Much cheaper. But the issue is it often goes into customers' spam or junk box. As you know, normal people will not often check their mailbox other than inbox.

#### Improve reliability of a SMTP server
To benefit the small business and make the cheaper SMTP server acts better, we need to investigate how mail security works and why your mail treated as spam.   

I notice when sending the same emails, it will go into spam of outlook users while going into the inbox of gmail users. It is likely due to Microsoft enforcing a stricker DMARC policy than Google. Eg. if you send email using hotmail email by a 3rd party smtp server, if your originating IP address is not allowed to send emails on behalf of hotmail.com since hotmail.com SPF and DKIM records don't include it, it causes a DMARC failure. meaning strict policies will drop or junk the email. The trend among email receivers is implementing strict DMARC policies in order to fight phishing. Generally speaking, it is not a viable long-term strategy to send email from a domain you don't control.    

* What is DMARC
DMARC stands for "Domain-based Message Authentication, Reporting & Conformance", is an email authentication policy and reporting protocol. Its process is as below.  
![DMARC process map](https://dmarc.org/wp-content/uploads/2015/02/DMARC_author-to-recipient_flow.jpg)
Here is an implementation process for Sendgrid about DMARC
![Send Grid description of DMARC](https://sendgrid.com/blog/what-is-dmarc/)

It builds upon both the DKIM and SPF, the goal of DMARC is to build on this system of sender and receivers collaborating to improve mail authentication practices of senders and enable receivers to reject unauthenticated messages. It use SPF and DKIM to determine the authenticity of an email message, DMARC requires both SPF and DKIM to fail in order for it to act on a message.

DMARC policies are published in the DNS as text resource records and announce what an email receiver should do with non-aligned it receives.

But remember not all ISPs support DMARC for now, it is still increasing.
* How senders deploy DMARC in 5-Easy steps
   1. Deploy DKIM & SPF, cover the basics
   2. Ensure that your mailers are correctly aligning the appropriate identifiers
   3. Publish a DMARC record with the "none" flag set for the policies, which requests data reports
   4. Analyze the data and modify your mail streams as appropriate
   5. Modify your DMARC policy flags from "none" to "quarantine" to "reject" as you gain experience.

* What is DKIM
DKIM stands for DomainKeys identifier mail which was designed to help ISPs prevent malicious email senders by validating email from specific DomainKeys.    

* What is SPF
Sender policy framework is an open standard aimed to prevent sender address forgery. Need to add this record to your DNS provider.  
To Add a SPF record for sendGrid, you need to
> First create a Whitelabeling record for your sendgrid account
  Then add a TXT record to your DNS record using url got from whitelabeling such as if you do not have SPF record before
   v=spf1 include:u123456.wl.sendgrid.net -all
   If you have already got a SPF record, then add record like below
   v=spf1 a mx include:\_spf.google.com include:spf.protection.outlook.com include:u826348.wl.sendgrid.net -all

I am not quite sure who is responsible to check the Domain set in SPF record and to see whether it is the same with the mail set in the header. It seems checked from Email provider, so I think it should be SMTP server provider?

* All you need to know about Whitelabeling
When you send an email by 3rd party SMTP server, it usually use its own domain. Eg. when you send you email by sendgrid, if not configuring sendgrid, usually it shows via sendgrid.me



* Improve email delivery
[Email delivery best practices](https://sendgrid.com/resource/email-deliverability/?mc=email&mcd=GSFreeearly&utm_medium=email&utm_source=nurture&cvosrc=email.nurture.GSFreeearly&utm_campaign=GSFreeearly&mkt_tok=eyJpIjoiWVRRelpEa3lOakJrWVRBMSIsInQiOiJpSWpXWGQwTDNDTlI1Z001QlBLcDl1b2hqRENobldveTFOZlZrOHB6MlViNzBIbjFGY0sweDdROHBDT2c0ajBRSU9qd3o1eDEyR2FzS29udTVtVGNpcklOeVMzVExURkZGaGVicEtaV1g1clc4dVpqOWs2M1V2RzVxd3ZUSnJ5SyJ9#reputation)
