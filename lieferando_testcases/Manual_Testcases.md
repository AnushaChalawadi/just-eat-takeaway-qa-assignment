# Part - 1 Manual Testcases for Restaurant filtering feature.

## FEATURE : Restaurant Filters.
The below testcases are focus on functionality Restaurant filtering feature which covers on basis impact and risk test scenarios. The Restaurant List Page is presented once after entering address information(https://www.lieferando.de/en).

### TC_01: Basic Functionality - Restaurant List without any Filters
- **Description**: Verify that the all the restaurants list is displayed in Listing Page
- **PreCondition**: User has entered a valid address.
- **Steps**:
    1. Select “Restaurants” category from the header 
    2. Observe the restaurant lists
- **Expected Results**: All the available restaurants for the location should be displayed. 
- **Risk/Impact**: High - This is a basline behaviour. First user impression and system entry point, If this fails, everything fails.

### TC_02: Apply Filter by Selecting a Single Cuisine under Restaurant Category
- **Description**: Verify that the restaurants can be filtered by a cuisine type and only relevant results are displayed.
- **PreCondition**: User has entered a valid address and is on the restaurants listing page with the "Restaurants" category selected.
- **Steps**:
    1. Select a specfic cuisine filter (Ex: Indian).
    2. Observe the restaurant list after the filter is applied.
- **Expected Results**: Only restaurants offering the selected cuisine are displayed and Each Restaurant cards reflects the selected cuisine. The applied filter should be highlighted and No restaurant with a non-Indian cuisine should appear in the list.
- **Risk/Impact**: High - Core filtering functionality; failure prevents users from finding relevant Restaurant, leading to poor user experience and Revenue loss.

### TC_03: Apply Multiple Filter '(Cuisine-filter, Free Delivery, Minimum Order Amount)' and Check for Filter Count
- **Description**: Verify that the restaurants results update correctly when multiple filters are applied and count updates accordingly.
- **PreCondition**: User has entered a valid address and is on the restaurants listing page with the "Restaurants" category selected.
- **Steps**:
    1. Apply Cuisine filter (Ex: Indian).
    2. Enable free delivery toggle.
    3. Select minimum order Amount - 15,00Euro or less.
    4. Observe the restaurant list after the filter is applied and Filter count updates correctly.
- **Expected Results**: Results should match with all selected filters and count updates correctly.Each Restaurant cards reflects the applied Filters accurately.
- **Risk/Impact**: High - Core filtering functionality; Incorrect Filter logic severely impact trust and usability, as many users rely on multiple filters.

### TC_04: Data Accuracy for 'Open Now/ New/ Free Delivery' Filter
- **Description**: Verify the restaurants information/data accuracy when applying filters(Open Now/New/Free delivery).
- **PreCondition**: User has entered a valid address and is on the restaurants listing page with the "Restaurants" category selected.
- **Steps**:
    1. Apply filters ('Open Now/New/Free delivery') individually.
    2. Observe the toggle behaviour.
    2. Observe the restaurant list after the filter is applied.
- **Expected Results**: Only restaurants matching the selected filter Criteria should shown, Restaurants status and delivery information are accurate.
- **Risk/Impact**: High - Core Functionality, Incorrect delivery data/information/availability directly impact on ordering and user trust.

### TC_05: Filter with 'Offers And Savings'
- **Description**: Verify that restaurants offering stampcards or deals are displayed when the “Offers & Savings” filter is applied.
- **PreCondition**: User has entered a valid address and is on the restaurants listing page with the "Restaurants" category selected.
- **Steps**:
    1. Apply the “Offers & Savings” filter.(Ex: Deals).
    2. Observe the restaurant list after the filter is applied.
- **Expected Results**: Only restaurants with active offers(not expired) or stampcards are displayed, Each restaurant card clearly should shows a stamp Card badge or discount information.
- **Risk/Impact**: High - Core Functionality, Incorrect offer filtering can lead to customer dissatisfaction, loss of trust, and financial discrepancies.

### TC_06: Filter Persistence Across Page Navigation
- **Description**: Verify the filters remains same in listing page when user navigate to restaurants description/detail page.
- **PreCondition**: User has entered a valid address and is on the Restaurants Listing Page with the "Restaurants" category selected and filters are applied (Ex: Indian).
- **Steps**:
    1. Navigate to the Restaurants Description/Detail page.
    2. Return to the Restaurants Listing Page.
    3. Observe the restaurant list updates for filter.
- **Expected Results**: Previously applied filter should remain active.
- **Risk/Impact**: High - Loss of filter state causes confusion and frustrate users.

### TC_07: 'Clear all filters/Remove this filter/Clear' Functionality of filters.
- **Description**: Verify that user can 'Clear all filters/Remove this filter/Clear' applied filters and return to the full restaurants listing page.
- **PreCondition**: User has entered a valid address and is on the restaurants listing page with the "Restaurants" category selected and filters are applied (Ex: Indian)
- **Steps**:
    1. Click on "Clear all filters"(appears when we select filters in left panel) or
    2. Click on "Remove this Filter" (appears when we select cuisine type)
    3. Observe the restaurant list updates.
- **Expected Results**: All filters should be removed and full restaurants list should be displayed.
- **Risk/Impact**: Medium - Users may feel stuck if applied filters cannot be removed.

### TC_08: Performance when Applying Filters
- **Description**: Verify that applying filters/more filters doesn't cause Performance Issue.
- **PreCondition**: User has entered a valid address and is on the restaurants listing page with the "Restaurants" category selected.
- **Steps**:
    1. Apply multiple filters(or remove reapply).
    2. Observe page loading time/performance/responsiveness of the application.
- **Expected Results**: Filtering should complete within acceptable time(≤ 2 seconds) without UI freeze or page reload.
- **Risk/Impact**: High - Slow performance, significantly impacts user satisfaction. 

### TC_09: Filter UI Responsiveness - Across Multiple Devices
- **Description**: Verify the filter UI works correctly across different devices and browsers.
- **PreCondition**: Application is accessible for all different devices.
- **Steps**:
    1. Apply filters on mobile devices (Android, IOS).
    2. Apply filters on different browsers(Chrome, Safari).
- **Expected Results**: Filter should work consistency in all platforms, UI should be stable and responsive.
- **Risk/Impact**: High - Mobile users are major , UI Issues can lead to loss customers/users.

### TC_10: Filter with 'Dietary' Preference
- **Description**: Verify the restaurants list are updated correctly based on the dietary filter.
- **PreCondition**: User has entered a valid address and is on the restaurants listing page with the "Restaurants" category selected.
- **Steps**:
    1. Apply dietary filter(Ex: Vegetarian) from left panel.
    2. Observe the restaurant list after the filter is applied.
- **Expected Results**: Only restaurants matching with dietary preference are displayed and Each restaurant cards reflects the selected dietary filter.
- **Risk/Impact**: High - Incorrect data/information dietary filtering impacts trust and user safety.

### TC_11: Filter with 'Rating'
- **Description**: Verify the restaurants list are updated correctly based on the rating filter.
- **PreCondition**: User has entered a valid address and is on the restaurants listing page with the "Restaurants" category selected.
- **Steps**:
    1. Apply filters on rating (Ex: 4 star).
    2. Observe the restaurant list updates.
- **Expected Results**: Only restaurants meeting with selected rating should be displayed(below the selected value must not be displayed) and Each restaurant cards reflects the selected rating filter.
- **Risk/Impact**: High - Incorrect ratings directly impacts on trust and decision-making.

### TC_12: Filter with 'Minimum Order Amount'
- **Description**: Verify the restaurants list are updated correctly based on the 'Minimum Order Amount' filter
- **PreCondition**: User has entered a valid address and is on the restaurants listing page with the "Restaurants" category selected.
- **Steps**:
    1. Apply filters on 'Minimum Order Amount' (Ex: 10.00EURO or less).
    2. Observe the restaurant list after filter is applied.
- **Expected Results**: Only restaurants with applied filter should be displayed, Currency format should be consistent (€, decimal format) and Each restaurant cards reflects the selected 'Minimum Order Amount' filter.
- **Risk/Impact**: High - Incorrect 'Minimum Order Amount' data impacts trust on application.

### TC_13: No Results Scenario With Complex Filters
- **Description**: Verify the application behaviour when filters return No Matches/Results.
- **PreCondition**: User has entered a valid address and is on the restaurants listing page with the "Restaurants" category selected.
- **Steps**:
    1. Apply a different combination filters on (Ex: Apply Cuisine + Select all Toggles- OpenNow, new, Free Delivery).
    2. Observe the results in listing page.
- **Expected Results**: A Clear message should be displayed for no results found. Option to clear filters should be available and No technical error, empty screen, or broken UI should be displayed.
- **Risk/Impact**: Medium - Empty state/without clear message could lead confusion to users.

### TC_14: Clearing one Filters while others are active
- **Description**: Verify that clearing one filter while others are active, updates the list correctly without affecting the other filters.
- **PreCondition**: User has entered a valid address and is on the restaurants listing page with the "Restaurants" category selected.
- **Steps**:
    1. Apply a multiple filters(Ex: Deals and Vegetarian),
    2. Now, clear one of the filter(Ex: Vegetarian)
    3. Observe the restaurant list and applied filters.
- **Expected Results**: Only the cleared filter should be removed and the remaining filter must stay active and visible.
Restaurant count updates accordingly without page errors or incorrect data
- **Risk/Impact**: High - Since users frequently refine searches by adjusting filters, failure can significantly impact usability and decision making.

### TC_15: Sorting interaction with filters
- **Description**: Verify that sorting options works correctly when filters are applied and sorting doesnt not reset or ignores active filters.
- **PreCondition**: User has entered a valid address and is on the restaurants listing page with the "Restaurants" category selected.
- **Steps**:
    1. Apply multiple filters(Ex:Indian and Deals)
    2. Verify that the restaurants list reflects accordingly
    3. Now, apply sorting(Ex: Reviews)/change sort
    4. Observe the updated list
- **Expected Results**: Sorting should apply only to the applied filters, the restaurant list should be reordered correctly based on the sorting options.
No filters are reset or removed when sort is applied/changed
- **Risk/Impact**: High - If sorting ignores active filters, users may see unexpected or misleading results, this can lead loss of interest in the application or 

### TC_16: Filter Persistence on Page Refresh
- **Description**: Verify the filters persist after browser refresh
- **PreCondition**: User has entered a valid address and is on the restaurants listing page with the "Restaurants" category selected.
- **Steps**:
    1. Apply multiple filters (Indian + Free Delivery)
    2. Refresh the page.
- **Expected Results**: Applied filters remain active and resturant list remains filtered correctly.
- **Risk/Impact**: HIGH - users frequently refresh the page, losing filters causes frustration to users.

### TC_17: Filter Reset on Address Change
- **Description**: Verify filter behavior when address changes.
- **PreCondition**: User has entered a valid address and is on the restaurants listing page with the "Restaurants" category selected.
- **Steps**:
    1. Apply filters
    2. Change the delivery address.
- **Expected Results**: Filters reset or update correctly based on new location.
- **Risk/Impact**: HIGH – Critical feature , Wrong restaurants for location, can lead loss of interest in application.

### TC_18: Minimum order amount accuracy after applying filters
- **Description**: Verify that the minimum order amount displayed for each restaurant is accurate and respects the applied filter criteria.
- **PreCondition**: User has entered a valid address and is on the restaurants listing page with the "Restaurants" category selected.
- **Steps**:
    1. Observe the minimum order amount (€) displayed on multiple restaurant cards.
    2. Apply filters.
- **Expected Results**: All displayed restaurants have a minimum order selected value and Currency is consistently displayed as €.
- **Risk/Impact**: HIGH – Incorrect minimum order data directly affects checkout eligibility and user trust.