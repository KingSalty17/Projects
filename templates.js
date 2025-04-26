const templates = {
    // School Templates
    schoolMoving: `**[Organization] – Moving Services**     **DATE:** [date]     **TIME:** [time]\nLOCATION: **[Location Address]**\n**REQUIREMENT:** [Description]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**`,
    
    schoolPickupDelivery: `**[Organization] – Pickup & Deliveries**     **DATE:** [date]     **TIME:** [time]\n**FROM:** [From Location]\n[Stop Details with Addresses]\n**REQUIREMENT:** [Description]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**`,

    // State's Attorney Templates
    saRelocation: `**BCSAO – Relocation**     **DATE:** [date]     **TIME:** [time]\n**CLIENT:** [clientName] | [clientPhone]\n**FROM:** [fromAddress]\n**TO:** [toAddress]\n**REQUIREMENT:** [requirement]\n**POC: [firstName] [lastName] | [position] | [organization] | Office: [phone] | Email: [email]**`,    
    
    saFurnitureRemoval: `**BCSAO – Furniture Removal**     **DATE:** [date]     **TIME:** [time]\n**CLIENT:** [Client Name] | [Phone]\n**FROM:** [From Location]\n**TO:** [Destination]\n**Items Being Discarded:** [Item List]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**`,

    // HABC Templates
    haCleanout: `**Cleanout – [Complex]**     **DATE:** [date]     **TIME:** [time]\n**Please clean out the following unit at [Complex]:**\n[Street Address] | Baltimore, MD [Zip Code] | [BR Details]\n**NOTE:** [Special Instructions]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**`,
    
    haEviction: `**Eviction – [Complex]**     **DATE:** [date]     **TIME:** [time]\n**Eviction Address:** [Street Address] | Baltimore, MD [Zip Code] | [BR Details]\n**NOTE:** [Special Instructions]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**`,
    
    haRelocation: `**HABC – Relocation**     **DATE:** [date]     **TIME:** [time]\n**RESIDENT:** [Name] | [Phone]\n**FROM:** [From Address] | [Unit Details]\n**TO:** [To Address] | [Unit Details]\n**REMEMBER:** [Special Instructions]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**`,
    
    haBoxDelivery: `**HABC - Box Delivery**     **DATE:** [date]     **TIME:** [time]\n**Please deliver [Number] boxes to:**\n**RESIDENT:** [Name] | [Phone]\n[Delivery Address]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**`,
    
    haTruckUnload: `**HABC - Trucks Unloaded**     **DATE:** [date]     **TIME:** [time]\n**LOCATION:** [Warehouse Address]\n**SERVICE REQUESTED:** [Description]\n**EQUIPMENT:** [Needs]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**`,

    // Aging Services Template
    agingRelocation: `**Dept of Aging & Disabilities - Relocation Services**     **DATE:** [date]     **TIME:** [time]\n**RESIDENT:** [Name] | Home: [phone] | Mobile: [cell]\n**LOCATION:** [Address]\n**REQUIREMENT:** [Description]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**\n**PRICE:** [Amount]`,

    // Private Sector Templates
    privateRelocation: `**[Company] - Relocation of Furniture**     **DATE:** [date]     **TIME:** [time]\n**CLIENT:** [Name] | [Phone]\n**FROM:** [From Address]\n**TO:** [To Address]\n**REQUIREMENT:** [Item List]\n[Additional Stops/Requirements]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**\n**Price:** [Amount]`,
    
    chamberRelocation: `**Relocation – [Organization]**     **DATE:** [date]     **TIME:** [time]\n**Pick up from:** [From Address]\n**Drop off:** [To Address]\n**REQUIREMENT:** [Item List]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**`,

    // Non-Profit Templates
    grassrootsRelocation: `**[Organization] - Relocation Services**     **DATE:** [date]     **TIME:** [time]\n**PICK UP:** [From Address]\n**DROP OFF:** [Destination]\n**REQUIREMENT:** [Description]\n**EQUIPMENT:** [Needs]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**`,

    // Housing Commission Template
    hocRelocation: `**HOC – Relocation**     **DATE:** [date]     **TIME:** [time]\n**RESIDENT:** [Name] | [Phone]\n**FROM:** [From Address] | [Unit Details]\n**TO:** [To Address] | [Unit Details]\n**[Special Instructions]**\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**`,

    // University Template
    universityRelocation: `**[Organization] – Relocation Services**     **DATE:** [date]     **TIME:** [time]\n**Location:** [Address]\n**Description:** [Purpose]\n**Personnel:** [Mover Details]\n**Equipment:** [Needs]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**\n**Price:** [Amount]`,

    // Project Management Template
    jacobsRelocation: `**[Project] - Moving Services**     **DATE:** [date]     **TIME:** [time]\n**PICK UP LOCATION:** [From Address]\n**DROP OFF LOCATION:** [To Address]\n**REQUIREMENT:** [Description]\n**PERSONNEL:** [Mover Details]\n**EQUIPMENT:** [Needs]\n**POC: [firstName] [lastName] | [position] | [organization] | [phone] | [cell] | [email]**`
};