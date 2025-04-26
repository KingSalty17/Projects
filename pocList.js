const pocList = [
  // Anne Arundel County Public Schools
  { 
    firstName: "James", 
    lastName: "Williams", 
    position: "Property Control Manager, CPPM", 
    organization: "Anne Arundel County Public Schools", 
    phone: "410-923-5030", 
    cell: "443-831-8895", 
    fax: "410-923-5035", 
    email: "jowilliams@aacps.org" 
  },

  // The University of Baltimore
  { 
    firstName: "Sean", 
    lastName: "Holland", 
    position: "Project Manager", 
    organization: "The University of Baltimore", 
    phone: "410-837-5163", 
    cell: "443-610-0159", 
    email: "sholland@ubalt.edu" 
  },

  // Grassroots Crisis Intervention Center
  { 
    firstName: "Anna", 
    lastName: "Katz", 
    position: "Operations Manager", 
    organization: "Grassroots Crisis Intervention Center, Inc.", 
    address: "8990 Old Annapolis Road, Suite A, Columbia, Maryland 21045",
    phone: "410-531-6006", 
    cell: "410-274-9664", 
    fax: "410-531-1724", 
    email: "anna@grassrootscrisis.org" 
  },

  // Jacobs Project Management Company
  { 
    firstName: "Susan", 
    lastName: "Haff", 
    position: "Project Manager", 
    organization: "Jacobs Project Management Company", 
    phone: "443-756-71", 
    email: "Susan.haff@Jacobs.com" 
  },

  // Housing Opportunities Commission
  { 
    firstName: "Teajuana", 
    lastName: "Graves", 
    position: "Relocation Specialist", 
    organization: "Housing Opportunities Commission", 
    address: "10400 Detrick Avenue, Kensington, MD 20895",
    phone: "240-627-9522", 
    cell: "240-704-3246", 
    email: "teajuana.graves@hocmc.org" 
  },
  { 
    firstName: "Courtney", 
    lastName: "Silue", 
    position: "Administrative Aide III", 
    organization: "Housing Opportunities Commission", 
    address: "10400 Detrick Avenue, Kensington, MD 20895",
    phone: "240-627-9668", 
    email: "courtney.silue@hocmc.org" 
  },

  // Office of the State’s Attorney for Baltimore City
  { 
    firstName: "Evelyn", 
    lastName: "Vargas", 
    position: "Relocation Specialist – Victim Witness Division", 
    organization: "Office of the State’s Attorney for Baltimore City", 
    address: "120 E. Baltimore Street – Floor 9, Baltimore, MD 21202",
    phone: "410-396-5617", 
    email: "evargas@stattorney.org" 
  },
  { 
    firstName: "Sarah", 
    lastName: "Hollenbach", 
    position: "Team Lead – Victim Witness Division", 
    organization: "Office of the State’s Attorney for Baltimore City", 
    address: "100 N. Calvert Street, Room 410, Baltimore, MD 21202",
    phone: "410-396-4479", 
    email: "shollenbach@stattorney.org" 
  },
  { 
    firstName: "Clover J.", 
    lastName: "Hayden", 
    position: "Project Coordinator/Procurement Agency Accountant", 
    organization: "Office of the State’s Attorney for Baltimore City", 
    address: "120 East Baltimore Street, 9th Floor, Baltimore, Maryland 21202",
    phone: "443-984-6058", 
    email: "chayden@stattorney.org" 
  },

  // Department of Aging and Disabilities
  { 
    firstName: "Sandra", 
    lastName: "Mobry", 
    position: "BSW", 
    organization: "Department of Aging and Disabilities", 
    phone: "410-222-4307", 
    cell: "410-980-6562", 
    email: "agmobr22@aacounty.org" 
  },
  { 
    firstName: "Christopher", 
    lastName: "Werth", 
    position: "Department Staff", 
    organization: "Department of Aging and Disabilities", 
    address: "2666 Riva Road, 4th Floor, Annapolis, MD 21401",
    phone: "410-222-0267", 
    cell: "443-481-9556", 
    email: "" 
  },

  // Baltimore County Public Schools
  { 
    firstName: "Jodi", 
    lastName: "Obenstine", 
    position: "CETL-Director", 
    organization: "Baltimore County Public Schools", 
    address: "Pulaski Park Business Complex, 9611 Middle River Road, Suite 307, Middle River, MD 21221",
    phone: "443-809-9682", 
    email: "jobenstine@bcps.org" 
  },
  { 
    firstName: "David P.", 
    lastName: "Langis", 
    position: "IT Staff", 
    organization: "Baltimore County Public Schools", 
    address: "Kenwood Administrative Building, 600 Stemmers Run Road, Essex, MD 21221",
    phone: "410-982-8228", 
    email: "dlangis@bcps.org" 
  },
  { 
    firstName: "Bradley", 
    lastName: "Potter", 
    position: "IT Project Management Specialist", 
    organization: "Baltimore County Public Schools", 
    address: "Kenwood Administrative Building, 600 Stemmers Run Road, Essex, MD 21221",
    phone: "443-809-4672", 
    email: "bpotter@bcps.org" 
  },

  // The CT Group / The Rosemont
  { 
    firstName: "Marsha S.", 
    lastName: "Jackson", 
    position: "Staff", 
    organization: "The CT Group", 
    cell: "443-848-3512", 
    fax: "240-554-6484", 
    email: "mjackson@c-t-associates.com" 
  },
  { 
    firstName: "Sekou", 
    lastName: "Ahmad", 
    position: "Community Manager", 
    organization: "The Rosemont", 
    address: "1121 North Ellamont Street, Baltimore, MD 21216",
    phone: "410-844-5516", 
    email: "" 
  },

  // HABC Contacts
  { 
    firstName: "Bridget", 
    lastName: "Hooper", 
    position: "Vice President of Relocation", 
    organization: "HABC", 
    address: "417 E. Fayette St., Suite 1306, Baltimore, MD 21202",
    phone: "443-984-2204", 
    cell: "410-302-2664", 
    email: "Bridget.Hooper@habc.org" 
  },
  { 
    firstName: "Rita", 
    lastName: "Johnson", 
    position: "Asset/Property Manager", 
    organization: "HABC - Scattered Sites/Rehab Housing", 
    address: "709 East Eager Street, Baltimore, MD 21202",
    phone: "443-984-1867 Ext. 24214", 
    fax: "443-984-1882", 
    cell: "443-814-8965", 
    email: "rita.johnson@habc.org" 
  },
  { 
    firstName: "Kelli", 
    lastName: "Haun", 
    position: "Assistant Asset Manager", 
    organization: "HABC - Housing Operations", 
    address: "709 East Eager Street, Rehab Housing, Baltimore, MD 21202",
    phone: "443-984-1867", 
    email: "Kelli.Haun@habc.org" 
  },
  { 
    firstName: "Charlotte", 
    lastName: "Hussy", 
    position: "Assistant Asset Manager", 
    organization: "HABC - Housing Operations", 
    address: "709 E. Eager Street, Scattered Sites, Baltimore, MD 21202",
    phone: "443-984-1867", 
    email: "Charlotte.Hussy@habc.org" 
  },
  { 
    firstName: "James", 
    lastName: "Young", 
    position: "Maintenance Superintendent", 
    organization: "HABC - Scattered Sites", 
    address: "3701 Duncanwood Lane, Baltimore, MD 21213",
    phone: "410-545-6140", 
    email: "James.Young@habc.org" 
  },
  { 
    firstName: "Robin", 
    lastName: "Jones", 
    position: "Central Supply Supervisor", 
    organization: "HABC - Central Stores", 
    phone: "443-984-1745", 
    email: "Robin.Jones@habc.org" 
  },
  { 
    firstName: "Dawn", 
    lastName: "Garrison", 
    position: "Program Administrator", 
    organization: "HABC - Housing Operations", 
    address: "417 E. Fayette Street, Suite 266, Baltimore, MD 21202",
    phone: "410-396-3819", 
    cell: "410-545-7403", 
    email: "Dawn.Garrison@habc.org" 
  },
  { 
    firstName: "Abraham", 
    lastName: "Wrotto", 
    position: "Asset Manager", 
    organization: "HABC - Housing Operations", 
    address: "800 W. Lexington Street, Poe Homes, Baltimore, MD 21201",
    phone: "410-361-9045", 
    email: "Abraham.Wrotto@habc.org" 
  },
  { 
    firstName: "Eric", 
    lastName: "Robinson", 
    position: "Maintenance Superintendent", 
    organization: "HABC - Poe Homes/Scattered Sites", 
    cell: "667-380-3204", 
    email: "Eric.Robinson@habc.org" 
  },
  { 
    firstName: "Brandon", 
    lastName: "Green", 
    position: "Asset Manager", 
    organization: "HABC - Housing Operations", 
    address: "1200 Gusryan Street, O'Donnell Heights, Baltimore, MD 21224",
    phone: "410-545-3666", 
    cell: "443-301-4548", 
    fax: "410-396-2462", 
    email: "brandon.green@habc.org" 
  },
  { 
    firstName: "Charles", 
    lastName: "Page Sr.", 
    position: "Maintenance Superintendent", 
    organization: "HABC - Latrobe Homes", 
    cell: "443-791-3356", 
    email: "Charles.Page@habc.org" 
  },
  { 
    firstName: "Sheila W.", 
    lastName: "Evans", 
    position: "Assistant Asset Manager", 
    organization: "HABC - Latrobe Homes", 
    address: "900 East Madison Street, Baltimore, MD 21202",
    phone: "410-545-6140", 
    fax: "410-244-6195", 
    email: "Sheila.Evans@habc.org" 
  },
  { 
    firstName: "Nicholas", 
    lastName: "Wilkins", 
    position: "Maintenance Superintendent", 
    organization: "HABC - Latrobe Homes", 
    address: "900 E Madison Street, Latrobe Homes, Baltimore MD 21202",
    email: "Nicholas.Wilkins@habc.org" 
  },
  { 
    firstName: "Lasonia", 
    lastName: "McLain", 
    position: "Asset Manager", 
    organization: "HABC - Cherry HIll Homes", 
    address: "2700 Spelman Road, Cherry HIll Homes, Baltimore, MD 21225",
    phone: "410-396-4248", 
    email: "Lasonia.McLain@habc.org" 
  },
  { 
    firstName: "Erana", 
    lastName: "Wallace", 
    position: "Assistant Asset Manager", 
    organization: "HABC - Cherry HIll Homes", 
    address: "2700 Spelman Road, Cherry HIll Homes, Baltimore, MD 21225",
    phone: "410-396-3004", 
    fax: "410-396-2980", 
    email: "Erana.Wallace@habc.org" 
  },
  { 
    firstName: "Yvonne", 
    lastName: "Slater", 
    position: "Assistant Asset Manager", 
    organization: "HABC - Cherry Hill Homes", 
    address: "2700 Spelman Road, Baltimore, MD 21215",
    phone: "410-396-3004", 
    cell: "410-782-1114", 
    email: "Yvonne.Slater@habc.org" 
  },
  { 
    firstName: "Elaine", 
    lastName: "Dempsey", 
    position: "Administrative Assistant", 
    organization: "HABC - Cherry Hill Homes", 
    address: "2700 Spelman Road, Rehabilitated Housing, Baltimore, MD 21225",
    phone: "410-396-3004", 
    email: "Elaine.Dempsey@habc.org" 
  },
  { 
    firstName: "Regena", 
    lastName: "Davis", 
    position: "Asset Manager", 
    organization: "HABC - Westport-Mt. Winans", 
    address: "2343 Norfolk Street, Baltimore, MD 21230",
    phone: "410-545-7962", 
    fax: "410-396-8231", 
    email: "regena.davis@habc.org" 
  },
  { 
    firstName: "Trent", 
    lastName: "Marshall", 
    position: "Maintenance Supervisor", 
    organization: "HABC - Westport-Mt. Winans", 
    address: "2343 Norfolk Street, Baltimore, MD 21230",
    phone: "410-545-7962", 
    fax: "410-396-8231", 
    email: "trent.marshall@habc.org" 
  },
  { 
    firstName: "Tamika", 
    lastName: "Stephens", 
    position: "Assistant Asset Manager", 
    organization: "HABC - Brooklyn Homes", 
    address: "4140 10th Street, Brooklyn Homes, Baltimore, MD 21225",
    phone: "410-361-0945", 
    email: "Tamika.Stephens@habc.org" 
  },
  { 
    firstName: "George", 
    lastName: "Simmons", 
    position: "Supervising Technician", 
    organization: "HABC - Brooklyn Homes", 
    address: "4140 Tenth Street, Brooklyn Homes, Baltimore, MD 21225",
    phone: "410-545-7632", 
    email: "George.Simmons@habc.org" 
  },
  { 
    firstName: "Fentress", 
    lastName: "Jackson", 
    position: "Asset Manager", 
    organization: "HABC - Gilmor/Rosemont/Dukeland", 
    address: "1640 Balmor Court, Baltimore MD 21217",
    phone: "410-396-0222", 
    email: "Fentress.Jackson@habc.org" 
  },
  { 
    firstName: "Erin", 
    lastName: "Crockett", 
    position: "Assistant Asset Manager", 
    organization: "HABC - Gilmor/Dukeland Homes", 
    address: "1640 Balmor Court, Gilmor/Dukeland Homes, Baltimore, MD 21217",
    phone: "410-396-0222", 
    fax: "410-396-0315", 
    email: "Erin.Crockett@habc.org" 
  },
  { 
    firstName: "Chris", 
    lastName: "Allen", 
    position: "Maintenance Superintendent", 
    organization: "HABC - Gilmor Homes/Dukeland", 
    address: "Housing Operations – Baltimore, MD 21225",
    phone: "410-302-5783", 
    email: "Chris.Allen@habc.org" 
  },
  { 
    firstName: "Gladys", 
    lastName: "James", 
    position: "Maintenance Clerk II", 
    organization: "HABC - Gilmor Homes", 
    address: "1640 Balmor Court, Gilmor Homes, Baltimore, MD 21217",
    phone: "410-396-0057", 
    email: "Gladys.James@habc.org" 
  },
  { 
    firstName: "Corey", 
    lastName: "Caudle", 
    position: "Maintenance Superintendent", 
    organization: "HABC - Gilmor Homes", 
    address: "3800 West Belvedere Avenue, Gilmor Homes, Baltimore, MD 21215",
    phone: "410-396-3292", 
    email: "Corey.Caudle@habc.org" 
  },
  { 
    firstName: "Odyssey", 
    lastName: "Wilkins-Johnson", 

    position: "Assistant Asset Manager", 
    organization: "HABC - Douglass-Somerset", 
    address: "203 N. Eden Street, Douglass-Somerset, Baltimore MD 21231",
    phone: "410-545-6316", 
    altPhone: "410-396-9166", 
    email: "Odyssey.Wilkins-Johnson@habc.org" 
  },
  { 
    firstName: "Danae", 
    lastName: "Reeder", 
    position: "Assistant Asset Manager", 
    organization: "HABC - McCulloh Homes", 
    address: "1640 Balmor Court, Baltimore, MD 21217",
    email: "Danae.Reeder@habc.org" 
  },
  { 
    firstName: "Gerald", 
    lastName: "Burnside", 
    position: "Administrative Maintenance Superintendent", 
    organization: "HABC - West-Gilmor-McCulloh-Poe-Westport", 
    address: "709 E. Eager Street, Baltimore, MD 21202",
    phone: "410-396-1652", 
    cell: "410-302-5829", 
    email: "gerald.burnside@habc.org" 
  },
  { 
    firstName: "Randy B.", 
    lastName: "Wells III", 
    position: "Community Engagement Liaison", 
    organization: "Office of Resident Services", 
    address: "709 E. Eager Street, Baltimore, MD 21202", 
    phone: "410-396-3272", 
    cell: "443-253-9978", 
    email: "randolph.wells@habc.org" 
  }
];