function analyzeFluxEvents(transmission)
{
    let count = 0;

    for (let i = 0; i < transmission.length; i++)
    {
        let ch = transmission[i];

        if (ch >= 'a' && ch <= 'z')
        {
            count++;
        }
    }

    if (count > 0)
    {
        console.log(`Detected ${count} high-voltage anomalies in signal stream.`);
    }
    else
    {
        console.log("Stream stable: no dominant flux events recorded.");
    }
}

const transmission = "a7XZtGeo9Bc";

analyzeFluxEvents(transmission);