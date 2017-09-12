# eShopContainer Analysis

## login procedure
   This application uses IdentityServer4 as its identity service. And using this service may meet below issue
   '''
   The response I Get is IOException: IDX10804: Unable to retrieve document from: http://YOUR URI/.well-known/openid-configuration
   '''
   It means you can not contact with the IdentityServer4 I think, but the reason why this happens differs. My issue is when I test it on local environment using WIN10 and Docker CE, the reason is firewall block the port, I define a new inbound rule open the port I need but some inbound rule blocks it, for me, the inbound rule is vpnkit, there are four of them, I just need to disable one that blocks TCP on public networks.

   I saw others have issue with the certificate, since 'IIS Express Development Certificate' may be not trusted certificate on some machine. and the solution is export that and import it back to the "Trusted Root Certification Authorities"->"Certificate". 
