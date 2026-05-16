function validateIdentity(CIN)
{
    let isValid = true;
    
    if(CIN>1)
    {
        for (let i = 2; i < CIN; i++)
        {
            if (CIN % i === 0)
            {
                isValid = false;
                break;
            }
        }
    }
    else
    {
        isValid = false;
    }
    
    if(isValid)
    {
        return "Agent Approved: Identity pattern is untraceable.";
    }
    else
    {
        return "Rejected: Identity pattern shows external links.";
    }
    
}

const CIN = 91;
console.log(validateIdentity(CIN));

