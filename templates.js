const templates = {
    // School Templates
    schoolMoving: `**[Organization] – Moving Services**     **DATE:** [date]     **TIME:** [time]
                    \nLOCATION: **[location]**
                    \n**REQUIREMENT:** [description]
                    \n**Personnel:** [moverDetails]
                    \n**Equipment:** [needs]
                    \n**POC:** [pocFirstName] [pocLastName] | [pocPosition] | [pocOrganization] | [pocAddress] | [pocPhone] | [pocCell] | [pocEmail]**`,


    schoolPickupDelivery: `**[Organization] – Pickup & Deliveries**     **DATE:** [date]     **TIME:** [time]
                    \n**FROM:** [fromAddress]
                    \n[Stop Details with Addresses]
                    \n**REQUIREMENT:** [description]
                    \n**Personnel:** [moverDetails]
                    \n**Equipment:** [needs]
                    \n**POC:** [pocFirstName] [pocLastName] | [pocPosition] | [pocOrganization] | [pocAddress] | [pocPhone] | [pocCell] | [pocEmail]**`,

    // State's Attorney Templates
    saRelocation: `**[BCSAO – Relocation]**     **DATE:** [date]     **TIME:** [time]
                    \n**CLIENT:** [clientName] | [clientPhone]
                    \n**FROM:** [fromAddress]
                    \n**TO:** [toAddress]
                    \n**REQUIREMENT:** [requirement]
                    \n**POC:** [pocFirstName] [pocLastName] | [pocPosition] | [pocOrganization] | [pocAddress] | [pocPhone] | [pocCell] | [pocEmail]**`,

    saFurnitureRemoval: `**[BCSAO – Furniture Removal]**     **DATE:** [date]     **TIME:** [time]
                    \n**CLIENT:** [clientName] | [clientPhone]
                    \n**FROM:** [fromAddress]
                    \n**TO:** [toAddress]
                    \n**Items Being Discarded:** [itemList]
                    \n**POC:** [pocFirstName] [pocLastName] | [pocPosition] | [pocOrganization] | [pocAddress] | [pocPhone] | [pocCell] | [pocEmail]**`,

    // HABC Templates
    haCleanout: `**Cleanout – [complex]**     **DATE:** [date]     **TIME:** [time]
                    \n**Please clean out the following units at [complex]:**
                    \n(1) [address1] | [unitDetails1]
                    \n(2) [address2] | [unitDetails2]
                    \n(3) [address3] | [unitDetails3]
                    \n(4) [address4] | [unitDetails4]
                    \n(5) [address5] | [unitDetails5]
                    \n(6) [address6] | [unitDetails6]
                    \n(7) [address7] | [unitDetails7]
                    \n(8) [address8] | [unitDetails8]
                    \n(9) [address9] | [unitDetails9]
                    \n(10) [address10] | [unitDetails10]
                    \n(11) [address11] | [unitDetails11]
                    \n(12) [address12] | [unitDetails12]
                    \n(13) [address13] | [unitDetails13]
                    \n(14) [address14] | [unitDetails14]
                    \n(15) [address15] | [unitDetails15]
                    \n(16) [address16] | [unitDetails16]
                    \n(17) [address17] | [unitDetails17]
                    \n(18) [address18] | [unitDetails18]
                    \n(19) [address19] | [unitDetails19]
                    \n(20) [address20] | [unitDetails20]
                    \n**NOTE:** [specialInstructions]
                    \n**POC:** [pocFirstName] [pocLastName] | [pocPosition] | [pocOrganization] | [pocAddress] | [pocPhone] | [pocCell] | [pocEmail]**`,

    haEviction: `**Eviction – [complex]**     **DATE:** [date]     **TIME:** [time]
                    \n**Eviction Address:** [location]
                    \n**NOTE:** [specialInstructions]
                    \n**POC:** [pocFirstName] [pocLastName] | [pocPosition] | [pocOrganization] | [pocAddress] | [pocPhone] | [pocCell] | [pocEmail]**`,

    haRelocation: `**HABC – Relocation**     **DATE:** [date]     **TIME:** [time]
                    \n**RESIDENT:** [name] | [phone]
                    \n**FROM:** [fromAddress]
                    \n**TO:** [toAddress]
                    \n**REMEMBER:** [specialInstructions]
                    \n**POC:** [pocFirstName] [pocLastName] | [pocPosition] | [pocOrganization] | [pocAddress] | [pocPhone] | [pocCell] | [pocEmail]`,

    haBoxDelivery: `**HABC - Box Delivery**     **DATE:** [date]     **TIME:** [time]
                    \n**Please deliver [number] to:**
                    \n**RESIDENT:** [name] | [phone]
                    \n[location]
                    \n**POC:** [pocFirstName] [pocLastName] | [pocPosition] | [pocOrganization] | [pocAddress] | [pocPhone] | [pocCell] | [pocEmail]**`,

    haTruckUnload: `**HABC - Trucks Unloaded**     **DATE:** [date]     **TIME:** [time]
                    \n**LOCATION:** [location]
                    \n**SERVICE REQUESTED:** [description]
                    \n**EQUIPMENT:** [needs]
                    \n**POC: [pocFirstName] [pocLastName] | [pocPosition] | [pocOrganization] | [pocAddress] | [pocPhone] | [pocCell] | [pocEmail]**`,

    // Aging Services Template
    agingRelocation: `**Dept of Aging & Disabilities - Relocation Services**     **DATE:** [date]     **TIME:** [time]
                    \n**RESIDENT:** [name] | Home: [phone] | Mobile: [cell]
                    \n**LOCATION:** [location]
                    \n**REQUIREMENT:** [description]
                    \n*POC: [pocFirstName] [pocLastName] | [pocPosition] | [pocOrganization] | [pocAddress] | [pocPhone] | [pocCell] | [pocEmail]*
                    \n**PRICE:** [amount]`,

    // Private Sector Templates
    privateRelocation: `**Private - Relocation**     **DATE:** [date]     **TIME:** [time]
                    \n**CLIENT:** [clientName] | [clientPhone] | [clientEmail]
                    \n**FROM:** [fromAddress]
                    \n**TO:** [toAddress]
                    \n**REQUIREMENT:** [itemList]
                    \n**Price:** [amount]`,

    // Non-Profit Templates
    grassrootsRelocation: `**[Organization] - Relocation Services**     **DATE:** [date]     **TIME:** [time]
                    \n**PICK UP:** [fromAddress]
                    \n**DROP OFF:** [toAddress]
                    \n**REQUIREMENT:** [description]
                    \n**EQUIPMENT:** [needs]
                    \n**POC:** [pocFirstName] [pocLastName] | [pocPosition] | [pocOrganization] | [pocAddress] | [pocPhone] | [pocCell] | [pocEmail]**`,

    // Housing Commission Template
    hocRelocation: `**HOC – Relocation**     **DATE:** [date]     **TIME:** [time]
                    \n**RESIDENT:** [name] | [phone]
                    \n**FROM:** [fromAddress]
                    \n**TO:** [toAddress]
                    \n**[specialInstructions]**
                    \n**POC:** [pocFirstName] [pocLastName] | [pocPosition] | [pocOrganization] | [pocAddress] | [pocPhone] | [pocCell] | [pocEmail]**`,

    // University Template
    universityRelocation: `**[Organization] – Relocation Services**     **DATE:** [date]     **TIME:** [time]
                    \n**Location:** [location]
                    \n**Description:** [purpose]
                    \n**Personnel:** [moverDetails]
                    \n**Equipment:** [needs]
                    \n*POC: [pocFirstName] [pocLastName] | [pocPosition] | [pocOrganization] | [pocAddress] | [pocPhone] | [pocCell] | [pocEmail]*
                    \n**Price:** [amount]`,

    // Project Management Template
    jacobsRelocation: `**[Project] - Moving Services**     **DATE:** [date]     **TIME:** [time]
                    \n**PICK UP LOCATION:** [fromAddress]
                    \n**DROP OFF LOCATION:** [toAddress]
                    \n**REQUIREMENT:** [description]
                    \n**PERSONNEL:** [moverDetails]
                    \n**EQUIPMENT:** [needs]
                    \n**POC:** [pocFirstName] [pocLastName] | [pocPosition] | [pocOrganization] | [pocAddress] | [pocPhone] | [pocCell] | [pocEmail]`
};
