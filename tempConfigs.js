const templateConfigs = {
    // School Templates
    schoolMoving: `
        <div class="form-header-row">
            <h2 class="header-title">School Moving Services Entry</h2>
            <div class="date-time-row">
                <div class="input-group">
                    <label>DATE:</label>
                    <input type="date" id="date" placeholder="Enter date">
                </div>
                <div class="input-group">
                    <label>TIME:</label>
                    <input type="text" id="time" value="9:00 am">
                </div>
            </div>
        </div>
        <div class="input-group">
            <label>LOCATION:</label>
            <input type="text" id="location" class="full-width" placeholder="Location Address">
        </div>
        <div class="input-group">
            <label>REQUIREMENT:</label>
            <textarea id="description" placeholder="Description"></textarea>
        </div>
        <div class="input-group">
            <label>PERSONNEL:</label>
            <textarea id="moverDetails" placeholder="Staff requirements"></textarea>
        </div>
        <div class="input-group">
            <label>EQUIPMENT:</label>
            <textarea id="needs" placeholder="Required tools/vehicles"></textarea>
        </div>
    `,

    schoolPickupDelivery: `
        <div class="form-header-row">
            <h2 class="header-title">School Pickup & Deliveries Entry</h2>
            <div class="date-time-row">
                <div class="input-group">
                <label>DATE:</label>
                <input type="date" id="date" placeholder="Enter date">    
            </div>
    <div class="input-group">
        <label>TIME:</label>
        <input type="text" id="time" value="9:00 am">
    </div>
</div>
        </div>
        <div class="input-group">
            <label>FROM:</label>
            <input type="text" id="fromAddress" class="full-width" placeholder="From Location">
        </div>
        <div class="input-group">
            <label>STOP DETAILS:</label>
            <textarea id="specialInstructions" placeholder="Stop Details with Addresses"></textarea>
        </div>
        <div class="input-group">
            <label>REQUIREMENT:</label>
            <textarea id="description" placeholder="Description"></textarea>
        </div>
        <div class="input-group">
            <label>PERSONNEL:</label>
            <textarea id="moverDetails" placeholder="Staff requirements"></textarea>
        </div>
        <div class="input-group">
            <label>EQUIPMENT:</label>
            <textarea id="needs" placeholder="Required tools/vehicles"></textarea>
        </div>
    `,

    // State's Attorney Templates
    saRelocation: `
        <div class="form-header-row">
            <h2 class="header-title">BCSAO – Relocation Entry</h2>
           <div class="date-time-row">
    <div class="input-group">
        <label>DATE:</label>
         <input type="date" id="date" placeholder="Enter date">
    </div>
    <div class="input-group">
        <label>TIME:</label>
        <input type="text" id="time" value="9:00 am">
    </div>
</div>
        </div>
        <label><strong>CLIENT:</strong></label>
        <div class="client-row">
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

    saFurnitureRemoval: `
        <div class="form-header-row">
            <h2 class="header-title">BCSAO – Furniture Removal Entry</h2>
            <div class="date-time-row">
    <div class="input-group">
        <label>DATE:</label>
 <input type="date" id="date" placeholder="Enter date">    </div>
    <div class="input-group">
        <label>TIME:</label>
        <input type="text" id="time" value="9:00 am">
    </div>
</div>
        </div>
        <label><strong>CLIENT:</strong></label>
        <div class="client-row">
            <input type="text" id="name" placeholder="Name">
            <span class="pipe">|</span>
            <input type="text" id="phone" placeholder="Phone">
        </div>
        <div class="input-group">
            <label>FROM:</label> 
            <input type="text" id="fromAddress" class="full-width" placeholder="Source location">
        </div>
        <div class="input-group">
            <label>TO:</label>
            <input type="text" id="toAddress" class="full-width" placeholder="Destination">
        </div>
        <div class="input-group">
            <label>ITEMS:</label>
            <textarea id="itemList" placeholder="List of items to discard"></textarea>
        </div>
    `,
    // HABC Templates
    haCleanout: `
   <div class="form-header-row">
        <h2 class="header-title">HABC Cleanout Entry</h2>
        <div class="date-time-row">
            <div class="input-group">
                <label>DATE:</label>
                <input type="date" id="date" placeholder="Enter date">
            </div>
            <div class="input-group">
                <label>TIME:</label>
                <input type="text" id="time" value="9:00 am">
            </div>
        </div>
    </div>
    <div class="input-group">
        <label>COMPLEX:</label>
        <select id="complex">
                <option value="Cherry Hill Homes">Cherry Hill Homes</option>
                <option value="Scattered Sites">Scattered Sites</option>
                <option value="Gilmor Homes">Gilmor Homes</option>
                <option value="Perkins Homes">Perkins Homes</option>
                <option value="Poe Homes">Poe Homes</option>
                <option value="McCulloh Homes">McCulloh Homes</option>
                <option value="O'Donnell Homes">O'Donnell Heights</option>
                <option value="Brookyln Homes">Brookyln Homes</option>
                <option value="Westport/Mt. Winans">Westport/Mt. Winans</option>
                <option value="Dukeland Homes">Dukeland Homes</option>
                <option value="Rosemont Homes">Rosemont Homes</option>
                <option value="Douglass Homes">Douglass Homes</option>
                <option value="Labtrobe Homes">Labtrobe Homes</option>
            <option value="Will Add">Will Add</option>
        </select>
    </div>
    <div id="address-container">
        <div class="date-time-row address-row" id="address1">
            <div class="input-group">
                <label>ADDRESS (1):</label>
                <input type="text" class="address" placeholder="Enter address">
            </div>
            <div class="input-group">
                <label>BR DETAILS:</label>
                <select class="br-details" placeholder="Enter BR details (e.g., 3-br unit)"id="unitDetails">
                    <option value="1-br unit">1-br Unit</option>
                    <option value="2-br unit">2-br Unit</option>
                    <option value="3-br unit">3-br Unit</option>
                    <option value="4-br unit">4-br Unit</option>
                    <option value="5-br unit">5-br Unit</option>
                    <option value="No info"></option>
                </select>
            </div>
        </div>
        <div class="date-time-row address-row" id="address2" style="display: none;">
            <div class="input-group">
                <label>ADDRESS (2):</label>
                <input type="text" class="address" placeholder="Enter address">
            </div>
            <div class="input-group">
                <label>BR DETAILS:</label>
                <select class="br-details" placeholder="Enter BR details (e.g., 3-br unit)"id="unitDetails">
                    <option value="1-br unit">1-br Unit</option>
                    <option value="2-br unit">2-br Unit</option>
                    <option value="3-br unit">3-br Unit</option>
                    <option value="4-br unit">4-br Unit</option>
                    <option value="5-br unit">5-br Unit</option>
                    <option value="No info"></option>
                </select>
            </div>
        </div>
        <!-- Repeat for address3 to address20 -->
        ${Array.from({ length: 18 }, (_, i) => `
        <div class="date-time-row address-row" id="address${i + 3}" style="display: none;">
            <div class="input-group">
                <label>ADDRESS (${i + 3}):</label>
                <input class="address" type="text" id="location" placeholder="Enter address">
            </div>
            <div class="input-group">
                <label>BR DETAILS:</label>
                <select class="br-details" placeholder="Enter BR details (e.g., 3-br unit)"id="unitDetails">
                    <option value="1-br unit">1-br Unit</option>
                    <option value="2-br unit">2-br Unit</option>
                    <option value="3-br unit">3-br Unit</option>
                    <option value="4-br unit">4-br Unit</option>
                    <option value="5-br unit">5-br Unit</option>
                    <option value="No info"></option>
                </select>
            </div>
        </div>`).join('')}
    </div>
    <div class="button-container">
        <button type="button" id="add-address-btn">Add Another Address</button>
    </div>
    <div class="input-group">
        <label>SPECIAL NOTES:</label>
        <textarea id="specialInstructions" placeholder="Special instructions">Please stay until all trash is bagged and removed before leaving the site.</textarea>
    </div>
`,
    haEviction: `
        <div class="form-header-row">
            <h2 class="header-title">HABC Eviction Entry</h2>
        <div class="input-group">
            <label for="complex">COMPLEX:</label>
            <select id="complex" class="full-width">
                <option value="Scattered Sites">Scattered Sites</option>
                <option value="Gilmor Homes">Gilmor Homes</option>
                <option value="Perkins Homes">Perkins Homes</option>
                <option value="Poe Homes">Poe Homes</option>
                <option value="McCulloh Homes">McCulloh Homes</option>
                <option value="O'Donnell Homes">O'Donnell Heights</option>
                <option value="Brookyln Homes">Brookyln Homes</option>
                <option value="Westport/Mt. Winans">Westport/Mt. Winans</option>
                <option value="Dukeland Homes">Dukeland Homes</option>
                <option value="Rosemont Homes">Rosemont Homes</option>
                <option value="Douglass Homes">Douglass Homes</option>
                <option value="Labtrobe Homes">Labtrobe Homes</option>
            	<option value="Will Add">Will Add</option>
            </select>
        </div>
            <div class="date-time-row">
    <div class="input-group">
        <label>DATE:</label>
 <input type="date" id="date" placeholder="Enter date">    </div>
    <div class="input-group">
        <label>TIME:</label>
        <input type="text" id="time" value="9:00 am">
    </div>
</div>
        </div>
        <div class="input-group">
            <label>EVICTION ADDRESS:</label>
            <input type="text" id="location" class="full-width" placeholder="Eviction address">
        </div>        
        <div class="input-group">
            <label>NOTE:</label>
            <textarea id="specialInstructions" placeholder="Additional details">Please stay until all trash is bagged and removed before leaving the site.</textarea>
        </div>
    `,

    haRelocation: `
        <div class="form-header-row">
            <h2 class="header-title">HABC Relocation Entry</h2>
            <div class="date-time-row">
    <div class="input-group">
        <label>DATE:</label>
 <input type="date" id="date" placeholder="Enter date">    </div>
    <div class="input-group">
        <label>TIME:</label>
        <input type="text" id="time" value="9:00 am">
    </div>
</div>
        </div>
        
        <label><strong>RESIDENT:</strong></label>
        <div class="client-row">
            <input type="text" id="name" placeholder="cilentName">
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
        <div class="input-group" style="display: none;">
    <label>REMEMBER:</label>
    <textarea id="specialInstructions" placeholder="Additional details">Please take photos of everything in each room so that all belongings are shown to avoid someone saying something was left or stolen. Make sure you check all the TVs are working before moving and once again when they’re at the new place.
    </textarea>
</div>
    `,

    haBoxDelivery: `
        <div class="form-header-row">
            <h2 class="header-title">HABC Box Delivery Entry</h2>
            <div class="date-time-row">
    <div class="input-group">
        <label>DATE:</label>
 <input type="date" id="date" placeholder="Enter date">    </div>
    <div class="input-group">
        <label>TIME:</label>
        <input type="text" id="time" value="9:00 am">
    </div>
</div>
        </div>
        <div class="input-group">
            <label>Delivery Items</label>
            <input type="text" id="number" placeholder="boxes, tapes, etc.">
        </div>
        <label><strong>RESIDENT:</strong></label>
        <div class="client-row">
            <input type="text" id="name"  placeholder="Name">
            <span class="pipe">|</span>
            <input type="text" id="phone" placeholder="Phone">
        </div>
        <div class="input-group">
            <label>DELIVERY ADDRESS:</label>
            <input type="text" id="location" class="full-width" placeholder="Full address">
        </div>
    `,

    haTruckUnload: `
        <div class="form-header-row">
            <h2 class="header-title">HABC Truck Unload Entry</h2>
            <div class="date-time-row">
    <div class="input-group">
        <label>DATE:</label>
 <input type="date" id="date" placeholder="Enter date">    </div>
    <div class="input-group">
        <label>TIME:</label>
        <input type="text" id="time" value="9:00 am">
    </div>
</div>
        </div>
        <div class="input-group">
            <label>WAREHOUSE ADDRESS:</label>
            <textarea id="location" placeholder="Location">Central Regional Warehouse | 3701 Ducanwood Lane | Baltimore, MD  21213</textarea>
        </div>
        <div class="input-group">
            <label>SERVICE DESCRIPTION:</label>
            <textarea id="description" placeholder="Service requested">R&A Movers needed to unload cabinets from tractor trailer.  Must have at least 8 - 10 movers to complete job.</textarea>
        </div>
        <div class="input-group">
            <label>EQUIPMENT NEEDS:</label>
            <textarea id="needs" placeholder="Required equipment">None required</textarea>
        </div>
    `,

    // Aging Services Template
    agingRelocation: `
        <div class="form-header-row">
            <h2 class="header-title">Dept of Aging & Disabilities - Relocation Services Entry</h2>
            <div class="date-time-row">
    <div class="input-group">
        <label>DATE:</label>
 <input type="date" id="date" placeholder="Enter date">    </div>
    <div class="input-group">
        <label>TIME:</label>
        <input type="text" id="time" value="9:00 am">
    </div>
</div>
        </div>
        
        <label><strong>RESIDENT:</strong></label>
        <div class="client-row">
            <input type="text" id="name" placeholder="Name">
            <span class="pipe">|</span>
            <input type="text" id="phone" placeholder="Phone">
        </div>


        <div class="input-group">
            <label>LOCATION:</label>
            <input type="text" id="location" class="full-width" placeholder="Address">
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

    // Private Sector Templates
    privateRelocation: `
        <div class="form-header-row">
            <h2 class="header-title">Private Relocation Entry</h2>
            <div class="date-time-row">
    <div class="input-group">
        <label>DATE:</label>
 <input type="date" id="date" placeholder="Enter date">    </div>
    <div class="input-group">
        <label>TIME:</label>
        <input type="text" id="time" value="9:00 am">
    </div>
</div>
        </div>
        <label><strong>CLIENT:</strong></label>
        <div class="client-row">
            <input type="text" id="clientName" placeholder="Name">
            <span class="pipe">|</span>
            <input type="text" id="clientPhone" placeholder="Phone">
        </div>
	<div class="input-group">
            <label>EMAIL:</label>
            <input type="text" id="clientEmail" class="full-width" placeholder="Enter email">
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
            <label>PRICE:</label>
            <input type="text" id="amount" placeholder="Agreed amount">
        </div>
    `,

    // Non-Profit Templates
    grassrootsRelocation: `
        <div class="form-header-row">
            <h2 class="header-title">Grassroots Relocation Entry</h2>
            <div class="date-time-row">
    <div class="input-group">
        <label>DATE:</label>
 <input type="date" id="date" placeholder="Enter date">    </div>
    <div class="input-group">
        <label>TIME:</label>
        <input type="text" id="time" value="9:00 am">
    </div>
</div>
        </div>
        <div class="input-group">
            <label>PICK UP:</label>
            <input type="text" id="fromAddress" class="full-width" placeholder="Source location">
        </div>
        <div class="input-group">
            <label>DROP OFF:</label>
            <input type="text" id="toAddress" class="full-width" placeholder="Destination">
        </div>
        <div class="input-group">
            <label>REQUIREMENTS:</label>
            <textarea id="description" placeholder="Service details"></textarea>
        </div>
        <div class="input-group">
            <label>EQUIPMENT:</label>
            <textarea id="needs" placeholder="Needed equipment"></textarea>
        </div>
    `,

    // Housing Commission Template
    hocRelocation: `
        <div class="form-header-row">
            <h2 class="header-title">HOC – Relocation Entry</h2>
            <div class="date-time-row">
    <div class="input-group">
        <label>DATE:</label>
 <input type="date" id="date" placeholder="Enter date">    </div>
    <div class="input-group">
        <label>TIME:</label>
        <input type="text" id="time" value="9:00 am">
    </div>
</div>
        </div>
        <label><strong>RESIDENT:</strong></label>
        <div class="client-row">
            
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

    // University Template
    universityRelocation: `
        <div class="form-header-row">
            <h2 class="header-title">University Relocation Entry</h2>
            <div class="date-time-row">
    <div class="input-group">
        <label>DATE:</label>
        <input type="text" id="date" placeholder="Enter date">
    </div>
    <div class="input-group">
        <label>TIME:</label>
        <input type="text" id="time" value="9:00 am">
    </div>
</div>
        </div>
        <div class="input-group">
            <label>LOCATION:</label>
            <input type="text" id="location" class="full-width" placeholder="Campus/building address">
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

    // Project Management Template
    jacobsRelocation: `
        <div class="form-header-row">
            <h2 class="header-title">Jacobs Relocation Entry</h2>
            <div class="date-time-row">
    <div class="input-group">
        <label>DATE:</label>
 <input type="date" id="date" placeholder="Enter date">    </div>
    <div class="input-group">
        <label>TIME:</label>
        <input type="text" id="time" value="9:00 am">
    </div>
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
    `
};

document.addEventListener('DOMContentLoaded', function () {
    const addAddressButton = document.getElementById('add-address-btn');
    if (addAddressButton) {
        addAddressButton.addEventListener('click', function () {
            const hiddenAddresses = document.querySelectorAll('.address-row[style*="display: none"]');
            if (hiddenAddresses.length > 0) {
                hiddenAddresses[0].style.display = 'flex';
            }
        });
    }
});
