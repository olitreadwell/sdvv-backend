Google drive - https://docs.google.com/spreadsheets/d/1mENueYg0PhXE_MA9AypWWBJvBLdY03b8H_N_aIW-Ohw/edit#gid=0

* candidate name:
  1. taken from google drive spreadsheet named "candidate_information" column "Candidate_Name"

* description:
  1. taken from google drive spreadsheet named "candidate_information" column "Description"

* website:
  1. taken from google drive spreadsheet named "candidate_information" column "Website"

* "raised":
  1. taken from efile_CSD_2020.xlsx. Look at
the A-Contributions, C-Contributions, I-Contributions sheets
  2. Filter by "Committee Name (Filer_Name)" which is found in the google drive spreadsheet 
  3. There is a Tran_Amt1 column. Take the sum of each sheet and add them together

* "spent" - similar to raise.
  1. Use efile_CSD_2020.xlsx at look at all sheets D-Expenditure, G-Expenditure, E-Expenditure sheets. 
  2. Filter by "Committee Name (Filer_Name)" which is found in the google drive spreadsheet 
  3. There is an Amount column, sum the total for each sheet

* "donors" - Taken from efile_CSD_2020.xlsx.
  1. Look at the A-Contributions, C-Contributions and I-Contributions sheets.
  2. Filter by "Committee Name (Filer_Name)" which is found in the google drive spreadsheet 
  3. There are two columns, Tran_NameL and Tran_NameF, combine the two columns
  4. Find all unique donors and output the total number of unique values.

* "by industry" - Taken from efile_CSD_2020.xlsx.   
  1. Look at the A-Contributions, C-Contributions and I-Contributions sheet.
  2. Filter by "Committee Name (Filer_Name)" which is found in the google drive spreadsheet 
  3. Find all unique values in Tran_Occ column.
  4. Sum all values for each unique group in Tran_Occ.
  5. Take the top 5 values sorted by most contributions.
  6. Output the Tran_Emp name, total amount from Tran_Emp and the percent of money over total contributions for this candidate.

* Support - Taken from netfile_2020.xlsx and outside_ependitures_total.csv
  1. Download the candidate's from the following file (https://docs.google.com/spreadsheets/d/1mENueYg0PhXE_MA9AypWWBJvBLdY03b8H_N_aIW-Ohw/edit#gid=0)
  2. Create a for loop to run through the Candidate_Name column
  3. Import the PAC committee spreadsheet located here (src/assets/data/outside_expenditures_total .csv)
  4. Filter by the candidate's name
  5. Filter the support column for 1 (1 for support, 0 for opposed)
  6. Copy all the IDs from the Filer_ID column
  7. From the netfile_2020.xlsx spreadsheet, go to the F496P3-Contributions and F461P5-Expenditure sheets and filter by all Filer_IDs
  8. Sum the total and save
  9. Update the support support key in the candidate's json file (example src/assests/candidates/2020/mayor/barbara_bry/barbara_bry.json) 
  
* Average Donation 
  1. Download the candidate's from the following file (https://docs.google.com/spreadsheets/d/1mENueYg0PhXE_MA9AypWWBJvBLdY03b8H_N_aIW-Ohw/edit#gid=0)
  2. Create a for loop to run through the Candidate_Name column
  3. Filter by the candidate's name
  4. Sum the total for each contribution in the Trans_Amt1 column and divide by the number of contributions
  5. Round this number by dollar unit (44.30 will be 44) 
  6. Update the average donation key in the candidate's json file (example src/assests/candidates/2020/mayor/barbara_bry/barbara_bry.json) 

* Opposed - Taken from netfile_2020.xlsx and outside_ependitures_total.csv
  1. Download the candidate's spreadsheet from the following file (https://docs.google.com/spreadsheets/d/1mENueYg0PhXE_MA9AypWWBJvBLdY03b8H_N_aIW-Ohw/edit#gid=0)
  2. Create a for loop to run through the Candidate_Name column
  3. Import the PAC committee spreadsheet located here (src/assets/data/outside_expenditures_total.csv)
  4. Filter by the candidate's name
  5. Filter the support column for 0 (1 for support, 0 for opposed)
  6. Copy all the IDs from the Filer_ID column
  7. From the src/assests/data/netfile_2020.xlsx spreadsheet, go to the F496P3-Contributions and F461P5-Expenditure sheets and filter by all Filer_IDs
  8. Sum the total and save
  9. Update the oppose support key in the candidate's json file (example src/assests/candidates/2020/mayor/barbara_bry/barbara_bry.json) 
  
* In vs Out - Mayor calculation - data taken from netfile_api_2020.csv, netfile_api_2029.csv and sd_zipcodes.csv
 1. Download the candidate's spreadsheet from the following file (https://docs.google.com/spreadsheets/d/1mENueYg0PhXE_MA9AypWWBJvBLdY03b8H_N_aIW-Ohw/edit#gid=0)
 2. Fiter office for mayor candidate's
 3. Create a loop to filter through each mayor candidate name in the "Committee Name (Filer_Name)" column
 4. Import all zipcodes found in sd_zipcodes.csv file (src/assests/data) 
 5. Filter data found in netfile_api_20**.csv files (2018,2019,2020). Sum the total for A,C,I column Form_Types and FilerName (step 2) if the zip code is in the valid zip code list in step 4. 
 6. Update candidate json for key ""in vs out district" key for in the "in" key. The value should be a string rounded to the nearest dollar
 7. Perform steps 4,5 again except sum the total for all zip codes that are not in the sd_zipcodes.csv file. 
 8. Update candidate json for key "in vs out district" key for the "out" key. The value should be a string rounded to the nearest dollar
 (Questions look at the candidate json file src/assets/candidates/2020/mayor/barbara_bry/barbara_bry.json)
 
 *THis is still being worked on*
 * In vs Out - City Council calculation - data taken from netfile_api_2020.csv, netfile_api_2029.csv and sd_zipcodes.csv
 1. Download the candidate's spreadsheet from the following file (https://docs.google.com/spreadsheets/d/1mENueYg0PhXE_MA9AypWWBJvBLdY03b8H_N_aIW-Ohw/edit#gid=0)
 2. Fiter office for "city council." Store the "Committee Name (Filer_Name)" and take of the district in the "District" column
 3. Create a loop to filter through each city council candidate name in the "Committee Name (Filer_Name)" column
 4. Import all zipcodes found in sd_zipcodes.csv file (src/assests/data) 
 5. Filter data found in netfile_api_20**.csv files (2018,2019,2020). Sum the total for A,C,I column Form_Types and FilerName (step 2) if the zip code is in the valid zip code list in step 4. 
 6. Update candidate json for key ""in vs out district" key for in the "in" key. The value should be a string rounded to the nearest dollar
 7. Perform steps 4,5 again except sum the total for all zip codes that are not in the sd_zipcodes.csv file. 
 8. Update candidate json for key "in vs out district" key for the "out" key. The value should be a string rounded to the nearest dollar
 (Questions look at the candidate json file src/assets/candidates/2020/mayor/barbara_bry/barbara_bry.json)
