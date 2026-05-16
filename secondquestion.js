const temporalCode = 20240628;

const layeredDepth = temporalCode.toString().length;

let securityLevel;

if (layeredDepth < 10)
{
    securityLevel = "Security Level: Sigma";
}

else
{
    securityLevel = "Security Level: Omega";
}

console.log(securityLevel);