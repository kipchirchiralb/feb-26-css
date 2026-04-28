Optimizing tool selection... I'll explore your workspace to understand the curriculum level and topics covered, then create targeted practice questions.

Based on your curriculum, here are **12 practice questions** with real-world scenarios to sharpen algorithm and data manipulation skills:

---

## **String & Number Manipulation**

**1. Social Media Username Validator**

> A social media platform needs to validate usernames. Create a function that takes a username string and returns `true` if it:
>
> - Is between 3-20 characters
> - Contains only letters, numbers, and underscores
> - Doesn't start with a number
>
> Example: `validateUsername("john_doe123")` → `true`

**2. Password Strength Checker**

> Write a function that analyzes password strength. Given a password string, return an object with:
>
> - `strength`: "weak", "medium", or "strong"
> - `hasNumbers`: boolean
> - `hasSpecialChars`: boolean
> - `length`: number
>
> Rules: weak < 6 chars, medium 6-12 chars, strong > 12 chars with mixed requirements

---

## **Array Transformations**

**3. E-commerce Product Filter**

> You have an array of products: `[{name, price, inStock, category}]`. Write a function that filters products by:
>
> - Price range (min-max)
> - Category
> - Stock availability
>
> Return count of matching products AND the products themselves.

**4. Student Grade Analyzer**

> Given an array of student objects: `[{name, scores: []}]` where scores is an array of test marks.
> Write functions to:
>
> - Calculate average grade per student
> - Find top 3 performers
> - Identify students needing tutoring (average < 70)

**5. Duplicate Remover with Count**

> Write a function that takes an array of emails and returns:
>
> - An array with unique emails
> - An object showing `{email: count}` of duplicates found
>
> Example: `["john@test.com", "jane@test.com", "john@test.com"]` → Unique: 2 items, Duplicates: john@test.com appears 2 times

---

## **Object & Data Structure Manipulation**

**6. Merge & Validate User Profiles**

> You receive two data sources for user profiles (arrays of objects):
>
> - Source A: `[{id, name, email}]`
> - Source B: `[{id, phone, address}]`
>
> Merge them by ID and validate:
>
> - No missing critical fields
> - Valid email format
> - Phone numbers are numeric
>   Return merged array + error report

**7. Inventory Stock Management**

> Manage warehouse inventory: `[{itemId, itemName, quantity, price}]`
> Write functions to:
>
> - Add/remove stock from an item
> - Calculate total inventory value
> - Find items below minimum threshold (e.g., < 5 units)
> - Group items by category

**8. E-commerce Order Receipt Generator**

> Given an order object: `{orderId, items: [{productName, qty, unitPrice}], customerInfo: {}}`
> Generate a function that:
>
> - Calculates subtotal, tax (8%), total
> - Applies discount codes (e.g., "SAVE10" = 10% off)
> - Returns formatted receipt string with itemized list

---

## **Complex Data Processing**

**9. Data Aggregation Challenge**

> You receive event logs: `[{timestamp, userId, action, duration}]`
> Write a function to:
>
> - Group events by userId
> - Calculate total duration per user
> - Find most active user
> - Return summary: `{userId: {totalDuration, eventCount, avgDuration}}`

**10. Student Enrollment System**

> Classes are objects: `{courseId, courseName, maxCapacity, enrolledStudents: [{id, name}]}`
> Write functions to:
>
> - Check if a student can enroll (capacity check)
> - Get enrollment percentage per class
> - Find most/least popular courses
> - Generate waiting list when full

**11. Weather Data Analyzer**

> Given array of daily weather: `[{date, temp, humidity, condition}]`
> Calculate:
>
> - Average temperature for the month
> - Days with extreme conditions (temp > 35°C or < 0°C)
> - Most common weather condition
> - Temperature trend (is it getting hotter/colder?)

**12. Transaction Validator & Categorizer**

> Bank transactions: `[{id, amount, type: "debit"/"credit", merchant, date}]`
> Write a function that:
>
> - Flags suspicious transactions (amount > $5000)
> - Categorizes merchants (groceries, gas, entertainment, etc.)
> - Calculates total spending by category
> - Identifies recurring transactions (same merchant, similar amount, regular intervals)
> - Returns organized report with warnings

---

**💡 Progression Tips:**

- Start with **#1-2** (string validation)
- Move to **#3-5** (array operations)
- Build to **#6-8** (objects & complex data)
- Challenge yourself with **#9-12** (real-world scenarios with multiple operations)

Would you like me to create starter code templates or solution guides for any of these?You've used 54% of your weekly rate limit. Your weekly rate limit will reset on May 4 at 3:00 AM. [Learn More](https://aka.ms/github-copilot-rate-limit-error)
