const templateConfigs = {
    saRelocation: `
        <div class="form-header-row">
            <div class="header-title">BCSAO – Relocation</div>
            <div class="input-group">
                <label>DATE:</label>
                <input type="text" id="date" placeholder="Enter date">
            </div>
            <div class="input-group">
                <label>TIME:</label>
                <input type="text" id="time" value="9:00 am">
            </div>
        </div>
        <div class="client-row">
            <label>CLIENT:</label>
            <input type="text" id="clientName" placeholder="Name">
            <span class="pipe">|</span>
            <input type="text" id="clientPhone" placeholder="Phone">
        </div>
        <div class="input-group">
            <label>FROM:</label>
            <input type="text" id="fromAddress" class="full-width" placeholder="Full address">
        </div>
        <div class="input-group">
            <label>TO:</label>
            <input type="text" id="toAddress" class="full-width" placeholder="Full address">
        </div>
        <div class="input-group">
            <label>REQUIREMENT:</label>
            <textarea id="requirement" placeholder="Detailed requirements"></textarea>
        </div>
    `,

    schoolMoving: `
        <div class="form-header-row">
            <div class="header-title">School Moving Services</div>
            <div class="input-group">
                <label>DATE:</label>
                <input type="text" id="date" placeholder="Enter date">
            </div>
            <div class="input-group">
                <label>TIME:</label>
                <input type="text" id="time" value="9:00 am">
            </div>
        </div>
        <div class="input-group">
            <label>LOCATION:</label>
            <input type="text" id="location" class="full-width" placeholder="School address">
        </div>
        <div class="input-group">
            <label>REQUIREMENT:</label>
            <textarea id="description" placeholder="Moving details"></textarea>
        </div>
    `,

    haCleanout: `
        <div class="form-header-row">
            <div class="header-title">Cleanout Details</div>
            <div class="input-group">
                <label>DATE:</label>
                <input type="text" id="date" placeholder="Enter date">
            </div>
            <div class="input-group">
                <label>TIME:</label>
                <input type="text" id="time" value="9:00 am">
            </div>
        </div>
        <div class="input-group">
            <label>COMPLEX:</label>
            <input type="text" id="complex" placeholder="Complex name">
        </div>
        <div class="input-group">
            <label>UNIT DETAILS:</label>
            <input type="text" id="unitDetails" class="full-width" placeholder="Unit information">
        </div>
        <div class="input-group">
            <label>SPECIAL NOTES:</label>
            <textarea id="specialInstructions"></textarea>
        </div>
    `,
    schoolPickupDelivery: `
        <div class="form-header-row">
            <div class="header-title">[Organization] – Pickup & Deliveries</div>
            <div class="input-group">
                <label>DATE:</label>
                <input type="text" id="date" placeholder="Enter date">
            </div>
            <div class="input-group">
                <label>TIME:</label>
                <input type="text" id="time" value="9:00 am">
            </div>
        </div>
        <div class="input-group">
            <label>FROM:</label>
            <input type="text" id="fromLocation" class="full-width" placeholder="Pickup location">
        </div>
        <div class="input-group">
            <label>STOP DETAILS:</label>
            <textarea id="stopDetails" placeholder="Addresses and stop information"></textarea>
        </div>
        <div class="input-group">
            <label>REQUIREMENT:</label>
            <textarea id="description" placeholder="Delivery details"></textarea>
        </div>
    `,

    saFurnitureRemoval: `
        <div class="form-header-row">
            <div class="header-title">BCSAO – Furniture Removal</div>
            <div class="input-group">
                <label>DATE:</label>
                <input type="text" id="date" placeholder="Enter date">
            </div>
            <div class="input-group">
                <label>TIME:</label>
                <input type="text" id="time" value="9:00 am">
            </div>
        </div>
        <div class="client-row">
            <label>CLIENT:</label>
            <input type="text" id="clientName" placeholder="Name">
            <span class="pipe">|</span>
            <input type="text" id="clientPhone" placeholder="Phone">
        </div>
        <div class="input-group">
            <label>FROM:</label>
            <input type="text" id="fromLocation" class="full-width" placeholder="Source location">
        </div>
        <div class="input-group">
            <label>TO:</label>
            <input type="text" id="destination" class="full-width" placeholder="Destination">
        </div>
        <div class="input-group">
            <label>ITEMS:</label>
            <textarea id="itemList" placeholder="List of items to discard"></textarea>
        </div>
    `,

    haBoxDelivery: `
        <div class="form-header-row">
            <div class="header-title">HABC - Box Delivery</div>
            <div class="input-group">
                <label>DATE:</label>
                <input type="text" id="date" placeholder="Enter date">
            </div>
            <div class="input-group">
                <label>TIME:</label>
                <input type="text" id="time" value="9:00 am">
            </div>
        </div>
        <div class="input-group">
            <label>NUMBER OF BOXES:</label>
            <input type="text" id="number" placeholder="Quantity">
        </div>
        <div class="client-row">
            <label>RESIDENT:</label>
            <input type="text" id="name" placeholder="Name">
            <span class="pipe">|</span>
            <input type="text" id="phone" placeholder="Phone">
        </div>
        <div class="input-group">
            <label>DELIVERY ADDRESS:</label>
            <input type="text" id="deliveryAddress" class="full-width" placeholder="Full address">
        </div>
    `,

    haTruckUnload: `
        <div class="form-header-row">
            <div class="header-title">HABC - Trucks Unloaded</div>
            <div class="input-group">
                <label>DATE:</label>
                <input type="text" id="date" placeholder="Enter date">
            </div>
            <div class="input-group">
                <label>TIME:</label>
                <input type="text" id="time" value="9:00 am">
            </div>
        </div>
        <div class="input-group">
            <label>WAREHOUSE ADDRESS:</label>
            <input type="text" id="warehouseAddress" class="full-width" placeholder="Location">
        </div>
        <div class="input-group">
            <label>SERVICE DESCRIPTION:</label>
            <textarea id="description" placeholder="Service requested"></textarea>
        </div>
        <div class="input-group">
            <label>EQUIPMENT NEEDS:</label>
            <textarea id="needs" placeholder="Required equipment"></textarea>
        </div>
    `,

    agingRelocation: `
        <div class="form-header-row">
            <div class="header-title">Dept of Aging & Disabilities - Relocation Services</div>
            <div class="input-group">
                <label>DATE:</label>
                <input type="text" id="date" placeholder="Enter date">
            </div>
            <div class="input-group">
                <label>TIME:</label>
                <input type="text" id="time" value="9:00 am">
            </div>
        </div>
        <div class="client-row">
            <label>RESIDENT:</label>
            <input type="text" id="name" placeholder="Name">
            <span class="pipe">|</span>
            <input type="text" id="phone" placeholder="Home phone">
            <span class="pipe">|</span>
            <input type="text" id="cell" placeholder="Mobile phone">
        </div>
        <div class="input-group">
            <label>LOCATION:</label>
            <input type="text" id="address" class="full-width" placeholder="Address">
        </div>
        <div class="input-group">
            <label>REQUIREMENT:</label>
            <textarea id="description" placeholder="Service details"></textarea>
        </div>
        <div class="input-group">
            <label>PRICE:</label>
            <input type="text" id="amount" placeholder="Amount">
        </div>
    `,
    privateRelocation: `
        <div class="form-header-row">
            <div class="header-title">[Company] - Relocation of Furniture</div>
            <div class="input-group">
                <label>DATE:</label>
                <input type="text" id="date" placeholder="Enter date">
            </div>
            <div class="input-group">
                <label>TIME:</label>
                <input type="text" id="time" value="9:00 am">
            </div>
        </div>
        <div class="client-row">
            <label>CLIENT:</label>
            <input type="text" id="clientName" placeholder="Name">
            <span class="pipe">|</span>
            <input type="text" id="clientPhone" placeholder="Phone">
        </div>
        <div class="input-group">
            <label>FROM:</label>
            <input type="text" id="fromAddress" class="full-width" placeholder="Source address">
        </div>
        <div class="input-group">
            <label>TO:</label>
            <input type="text" id="toAddress" class="full-width" placeholder="Destination address">
        </div>
        <div class="input-group">
            <label>ITEMS:</label>
            <textarea id="itemList" placeholder="List of furniture/items"></textarea>
        </div>
        <div class="input-group">
            <label>ADDITIONAL STOPS:</label>
            <textarea id="additionalStops" placeholder="Extra requirements/stops"></textarea>
        </div>
        <div class="poc-section">
            <div class="input-group">
                <label>POC FIRST NAME:</label>
                <input type="text" id="firstName" placeholder="Contact's first name">
            </div>
            <div class="input-group">
                <label>POC LAST NAME:</label>
                <input type="text" id="lastName" placeholder="Contact's last name">
            </div>
            <div class="input-group">
                <label>POSITION:</label>
                <input type="text" id="position" placeholder="Contact's position">
            </div>
            <div class="input-group">
                <label>PRICE:</label>
                <input type="text" id="amount" placeholder="Agreed amount">
            </div>
        </div>
    `,

    chamberRelocation: `
        <div class="form-header-row">
            <div class="header-title">Relocation – [Organization]</div>
            <div class="input-group">
                <label>DATE:</label>
                <input type="text" id="date" placeholder="Enter date">
            </div>
            <div class="input-group">
                <label>TIME:</label>
                <input type="text" id="time" value="9:00 am">
            </div>
        </div>
        <div class="input-group">
            <label>PICK UP:</label>
            <input type="text" id="fromAddress" class="full-width" placeholder="Origin address">
        </div>
        <div class="input-group">
            <label>DROP OFF:</label>
            <input type="text" id="toAddress" class="full-width" placeholder="Destination address">
        </div>
        <div class="input-group">
            <label>ITEMS:</label>
            <textarea id="itemList" placeholder="Inventory list"></textarea>
        </div>
        <div class="poc-section">
            <div class="input-group">
                <label>POC FIRST NAME:</label>
                <input type="text" id="firstName" placeholder="Contact's first name">
            </div>
            <div class="input-group">
                <label>POC LAST NAME:</label>
                <input type="text" id="lastName" placeholder="Contact's last name">
            </div>
            <div class="input-group">
                <label>ORGANIZATION:</label>
                <input type="text" id="organization" placeholder="Organization name">
            </div>
        </div>
    `,

    grassrootsRelocation: `
        <div class="form-header-row">
            <div class="header-title">[Organization] - Relocation Services</div>
            <div class="input-group">
                <label>DATE:</label>
                <input type="text" id="date" placeholder="Enter date">
            </div>
            <div class="input-group">
                <label>TIME:</label>
                <input type="text" id="time" value="9:00 am">
            </div>
        </div>
        <div class="input-group">
            <label>PICK UP:</label>
            <input type="text" id="fromAddress" class="full-width" placeholder="Source location">
        </div>
        <div class="input-group">
            <label>DROP OFF:</label>
            <input type="text" id="destination" class="full-width" placeholder="Destination">
        </div>
        <div class="input-group">
            <label>REQUIREMENTS:</label>
            <textarea id="description" placeholder="Service details"></textarea>
        </div>
        <div class="input-group">
            <label>EQUIPMENT:</label>
            <textarea id="needs" placeholder="Needed equipment"></textarea>
        </div>
        <div class="poc-section">
            <div class="input-group">
                <label>POC PHONE:</label>
                <input type="text" id="phone" placeholder="Office phone">
            </div>
            <div class="input-group">
                <label>POC CELL:</label>
                <input type="text" id="cell" placeholder="Mobile number">
            </div>
            <div class="input-group">
                <label>POC EMAIL:</label>
                <input type="email" id="email" placeholder="Email address">
            </div>
        </div>
    `,

    hocRelocation: `
        <div class="form-header-row">
            <div class="header-title">HOC – Relocation</div>
            <div class="input-group">
                <label>DATE:</label>
                <input type="text" id="date" placeholder="Enter date">
            </div>
            <div class="input-group">
                <label>TIME:</label>
                <input type="text" id="time" value="9:00 am">
            </div>
        </div>
        <div class="client-row">
            <label>RESIDENT:</label>
            <input type="text" id="name" placeholder="Name">
            <span class="pipe">|</span>
            <input type="text" id="phone" placeholder="Phone">
        </div>
        <div class="input-group">
            <label>FROM ADDRESS:</label>
            <input type="text" id="fromAddress" class="full-width" placeholder="Current address">
        </div>
        <div class="input-group">
            <label>TO ADDRESS:</label>
            <input type="text" id="toAddress" class="full-width" placeholder="New address">
        </div>
        <div class="input-group">
            <label>SPECIAL INSTRUCTIONS:</label>
            <textarea id="specialInstructions"></textarea>
        </div>
        <div class="poc-section">
            <div class="input-group">
                <label>POC POSITION:</label>
                <input type="text" id="position" placeholder="Job title">
            </div>
            <div class="input-group">
                <label>POC ORGANIZATION:</label>
                <input type="text" id="organization" placeholder="Organization name">
            </div>
        </div>
    `,

    universityRelocation: `
        <div class="form-header-row">
            <div class="header-title">[Organization] – Relocation Services</div>
            <div class="input-group">
                <label>DATE:</label>
                <input type="text" id="date" placeholder="Enter date">
            </div>
            <div class="input-group">
                <label>TIME:</label>
                <input type="text" id="time" value="9:00 am">
            </div>
        </div>
        <div class="input-group">
            <label>LOCATION:</label>
            <input type="text" id="address" class="full-width" placeholder="Campus/building address">
        </div>
        <div class="input-group">
            <label>DESCRIPTION:</label>
            <textarea id="purpose" placeholder="Relocation purpose"></textarea>
        </div>
        <div class="input-group">
            <label>PERSONNEL:</label>
            <textarea id="moverDetails" placeholder="Staff requirements"></textarea>
        </div>
        <div class="input-group">
            <label>EQUIPMENT:</label>
            <textarea id="needs" placeholder="Required tools/vehicles"></textarea>
        </div>
        <div class="input-group">
            <label>PRICE:</label>
            <input type="text" id="amount" placeholder="Quoted price">
        </div>
    `,

    jacobsRelocation: `
        <div class="form-header-row">
            <div class="header-title">[Project] - Moving Services</div>
            <div class="input-group">
                <label>DATE:</label>
                <input type="text" id="date" placeholder="Enter date">
            </div>
            <div class="input-group">
                <label>TIME:</label>
                <input type="text" id="time" value="9:00 am">
            </div>
        </div>
        <div class="input-group">
            <label>PICK UP:</label>
            <input type="text" id="fromAddress" class="full-width" placeholder="Origin address">
        </div>
        <div class="input-group">
            <label>DROP OFF:</label>
            <input type="text" id="toAddress" class="full-width" placeholder="Destination address">
        </div>
        <div class="input-group">
            <label>REQUIREMENTS:</label>
            <textarea id="description" placeholder="Project specifics"></textarea>
        </div>
        <div class="input-group">
            <label>PERSONNEL:</label>
            <textarea id="moverDetails" placeholder="Staff requirements"></textarea>
        </div>
        <div class="input-group">
            <label>EQUIPMENT:</label>
            <textarea id="needs" placeholder="Machinery/tools needed"></textarea>
        </div>
    `,
    haRelocation: `
    <div class="form-header-row">
        <div class="header-title">HABC – Relocation</div>
        <div class="input-group">
            <label>DATE:</label>
            <input type="text" id="date" placeholder="Enter date">
        </div>
        <div class="input-group">
            <label>TIME:</label>
            <input type="text" id="time" value="9:00 am">
        </div>
    </div>
    <div class="client-row">
        <label>RESIDENT:</label>
        <input type="text" id="name" placeholder="Name">
        <span class="pipe">|</span>
        <input type="text" id="phone" placeholder="Phone">
    </div>
    <div class="input-group">
        <label>FROM:</label>
        <input type="text" id="fromAddress" class="full-width" placeholder="Current address">
    </div>
    <div class="input-group">
        <label>TO:</label>
        <input type="text" id="toAddress" class="full-width" placeholder="New address">
    </div>
    <div class="input-group">
        <label>SPECIAL INSTRUCTIONS:</label>
        <textarea id="specialInstructions" placeholder="Additional details"></textarea>
    </div>
`,

haEviction: `
    <div class="form-header-row">
        <div class="header-title">HABC – Eviction</div>
        <div class="input-group">
            <label>DATE:</label>
            <input type="text" id="date" placeholder="Enter date">
        </div>
        <div class="input-group">
            <label>TIME:</label>
            <input type="text" id="time" value="9:00 am">
        </div>
    </div>
    <div class="input-group">
        <label>EVICTION ADDRESS:</label>
        <input type="text" id="evictionAddress" class="full-width" placeholder="Eviction address">
    </div>
    <div class="input-group">
        <label>UNIT DETAILS:</label>
        <input type="text" id="unitDetails" class="full-width" placeholder="Unit information">
    </div>
    <div class="input-group">
        <label>SPECIAL INSTRUCTIONS:</label>
        <textarea id="specialInstructions" placeholder="Additional details"></textarea>
    </div>
`
    // Add configurations for other templates following the same pattern
};