# KotlinJS
A javaScript library to run KotLin language in the browsers.\
***Note:*** This is for experimental purposes only and it's not a real KotLin compiler.

## Adding KotLinJS to Your Web Pages

Using a `CDN`:
`https://cdn.jsdelivr.net/gh/aldrin112602/KotlinJS/kotlin.js`
```javascript
<script src="https://cdn.jsdelivr.net/gh/aldrin112602/KotlinJS/kotlin.js"></script>
```
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <!-- place KotLinJS CDN here -->
    <script src="https://cdn.jsdelivr.net/gh/aldrin112602/KotlinJS/kotlin.js"></script>
  </head>
  <body>
  
  </body>
</html>
```

Or download the `KotLinJS` file and add link to the file

The KotLinJS library is a single JavaScript file, and you reference it with the HTML `<script>` tag (notice that the `<script>` tag should be inside the `<head>` section):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <!-- place KotLinJS file here -->
    <script src="kotlin.js"></script>
  </head>
  <body>
  
  </body>
</html>
```

<b>Tip:</b> Place the downloaded file in the same directory as the pages where you wish to use it.

## Get Started
In order to run kotlinJS, using `<script>` tag, add type attribute with a value of `text/kotlin`:\
Example:
```html
<script type="text/kotlin"></script>
```
You can now write KotLin codes inside script tag.
Note that place script tag inside before closing tag of body.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <!-- place KotLinJS CDN here -->
    <script src="https://cdn.jsdelivr.net/gh/aldrin112602/KotlinJS/kotlin.js"></script>
  </head>
  <body>
  
  <!--- Your kotlin script --->
  <script type="text/kotlin">
    // Example
    fun main() {
      val arr = arrayOf("Hello", "World")
      for(x in arr) {
        print(x) 
      }
    }
    
    // Output:
        // Hello
        // World
  </script>
  </body>
</html>
```

You can separate your KotLin script:
- Create KotLin file `Main.kt`
- Reference it using `script` tag
- Just add `src` attribute  and add link of your Kotlin file:
```html
 <script type="text/kotlin" src="/Main.kt"></script>
 ```
 You can now start writing KotLin script and see output in your browser.
 ```kotlin
 fun myFunc() {
   val cars = arrayOf("Volvo", "BMW", "Ford", "Mazda")
  
  //print values in array
   for(car in cars) {
      println(car)
   }
 }
 
 fun main() {
  //call function myFunc
  myFunc()
  
  val msg: String = "I got executed"
  println(msg)
 }
 ```
 
 Please give me star if you like it and follow me for more coding just like this.\
 Happy coding!
