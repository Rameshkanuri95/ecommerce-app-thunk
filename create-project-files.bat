:: Create folder structure
mkdir src\app src\features src\components src\api

:: Create necessary files
echo. > src\app\store.js
echo. > src\features\authSlice.js
echo. > src\features\authThunk.js
echo. > src\features\productsSlice.js
echo. > src\features\productsThunk.js
echo. > src\components\Navbar.js
echo. > src\components\ProductList.js
echo. > src\components\ProductDetail.js
echo. > src\components\Login.js
echo. > src\components\Register.js
echo. > src\components\Cart.js
echo. > src\api\api.js

:: Display success message
echo React eCommerce project setup is complete!
echo Navigate into %PROJECT_NAME% and start coding.
