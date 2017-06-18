# What is jquery.fakeloader

A lightweight jQuery plugin that helps you create an animated spinner with a fullscreen loading mask to simulate the page preloading effect.

jquery.fakeloader is available as a Bower package and Npm package. Just simply run:

```shell
bower install jquery.fakeloader
#OR
npm install jquery.fakeloader
```

## 1. Include in HTML Document

Include in the top of your `body` tag

```html
<div id="fakeLoader"></div>
```

## 2. Include Styles

Inside `head` tag

```html
<link rel="stylesheet" href="node_modules/jquery.fakeloader/dist/jquery.fakeloader.min.css">
```

## 3. Include Folowing Libraries

JQuery reference and the jquery.fakeloader

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"><script>
<script src="node_modules/jquery.fakeloader/dist/jquery.fakeloader.min.js"><script>
```

## 4. Basic Initialize

Include in bottom of your `body` tag

```html
   <script type="text/javascript">
        $("#fakeLoader").fakeLoader();
    </script>
```

## 5. Options

```html
<script type="text/javascript">
    $("#fakeLoader").fakeLoader({    
            timeToHide:1200, //Time in milliseconds for fakeLoader disappear
            zIndex:999, // Default zIndex
            spinner:"spinner1",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
            bgColor:"#2ecc71", //Hex, RGB or RGBA colors
            imagePath:"yourPath/customizedImage.gif" //If you want can you insert your custom image            
    });
</script>
```
