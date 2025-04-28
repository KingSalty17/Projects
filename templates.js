const templates = {
    // School Templates
    schoolMoving: `**[Organization] – Moving Services**     **DATE:** [date]     **TIME:** [time]\nLOCATION: **[location]**\n**REQUIREMENT:** [description]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**`,
    
    schoolPickupDelivery: `**[Organization] – Pickup & Deliveries**     **DATE:** [date]     **TIME:** [time]\n**FROM:** [fromAddress]\n[Stop Details with Addresses]\n**REQUIREMENT:** [description]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**`,

    // State's Attorney Templates
    saRelocation: `**BCSAO – Relocation**     **DATE:** [date]     **TIME:** [time]\n**CLIENT:** [clientName] | [clientPhone]\n**FROM:** [fromAddress]\n**TO:** [toAddress]\n**REQUIREMENT:** [requirement]\n**POC: [firstName] [lastName] | [position] | [organization] | Office: [phone] | Email: [email]**`,    
    
    saFurnitureRemoval: `**BCSAO – Furniture Removal**     **DATE:** [date]     **TIME:** [time]\n**CLIENT:** [clientName] | [clientPhone]\n**FROM:** [fromAddress]\n**TO:** [toAddress]\n**Items Being Discarded:** [itemList]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**`,

    // HABC Templates
    haCleanout: `**Cleanout – [complex]**     **DATE:** [date]     **TIME:** [time]\n**Please clean out the following unit at [complex]:**\n[location] | Baltimore, MD [Zip Code] | [unitDetails]\n**NOTE:** [specialInstructions]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**`,
    
    haEviction: `**Eviction – [complex]**     **DATE:** [date]     **TIME:** [time]\n**Eviction Address:** [location] | Baltimore, MD [Zip Code] | [unitDetails]\n**NOTE:** [specialInstructions]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**`,
    
    haRelocation: `**HABC – Relocation**     **DATE:** [date]     **TIME:** [time]\n**RESIDENT:** [name] | [phone]\n**FROM:** [fromAddress]\n**TO:** [toAddress]\n**REMEMBER:** [specialInstructions]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**`,
    
    haBoxDelivery: `**HABC - Box Delivery**     **DATE:** [date]     **TIME:** [time]\n**Please deliver [number] boxes to:**\n**RESIDENT:** [name] | [phone]\n[location]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**`,
    
    haTruckUnload: `**HABC - Trucks Unloaded**     **DATE:** [date]     **TIME:** [time]\n**LOCATION:** [location]\n**SERVICE REQUESTED:** [description]\n**EQUIPMENT:** [needs]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**`,

    // Aging Services Template
    agingRelocation: `**Dept of Aging & Disabilities - Relocation Services**     **DATE:** [date]     **TIME:** [time]\n**RESIDENT:** [name] | Home: [phone] | Mobile: [cell]\n**LOCATION:** [location]\n**REQUIREMENT:** [description]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**\n**PRICE:** [amount]`,

    // Private Sector Templates
    privateRelocation: `**[Company] - Relocation of Furniture**     **DATE:** [date]     **TIME:** [time]\n**CLIENT:** [clientName] | [clientPhone]\n**FROM:** [fromAddress]\n**TO:** [toAddress]\n**REQUIREMENT:** [itemList]\n[additionalStops]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**\n**Price:** [amount]`,
    
    chamberRelocation: `**Relocation – [Organization]**     **DATE:** [date]     **TIME:** [time]\n**Pick up from:** [fromAddress]\n**Drop off:** [toAddress]\n**REQUIREMENT:** [itemList]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**`,

    // Non-Profit Templates
    grassrootsRelocation: `**[Organization] - Relocation Services**     **DATE:** [date]     **TIME:** [time]\n**PICK UP:** [fromAddress]\n**DROP OFF:** [toAddress]\n**REQUIREMENT:** [description]\n**EQUIPMENT:** [needs]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**`,

    // Housing Commission Template
    hocRelocation: `**HOC – Relocation**     **DATE:** [date]     **TIME:** [time]\n**RESIDENT:** [name] | [phone]\n**FROM:** [fromAddress]\n**TO:** [toAddress]\n**[specialInstructions]**\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**`,

    // University Template
    universityRelocation: `**[Organization] – Relocation Services**     **DATE:** [date]     **TIME:** [time]\n**Location:** [location]\n**Description:** [purpose]\n**Personnel:** [moverDetails]\n**Equipment:** [needs]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**\n**Price:** [amount]`,

    // Project Management Template
    jacobsRelocation: `**[Project] - Moving Services**     **DATE:** [date]     **TIME:** [time]\n**PICK UP LOCATION:** [fromAddress]\n**DROP OFF LOCATION:** [toAddress]\n**REQUIREMENT:** [description]\n**PERSONNEL:** [moverDetails]\n**EQUIPMENT:** [needs]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**`
};
