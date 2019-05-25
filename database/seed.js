const db = require('./index.js')
const Product = require('./model.js')

let data = [
  {
    productID: 1,
    productName: 'NITE JOGGER SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_010_hover_standard.jpg',
    price: 120
  },
  {
    productID: 2,
    productName: 'TIRO 19 TRAINING PANTS',
    productType: 'pants',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_01_laydown.jpg',
    price: 120
  },
  {
    productID: 3,
    productName: 'ULTRABOOST SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_010_hover_standard.jpg',
    price: 100
  },
  {
    productID: 4,
    productName: 'SOBAKOV SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_010_hover_standard.jpg',
    price: 100
  },
  {
    productID: 5,
    productName: 'PUREBOOST GO SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Black/Pureboost_Go_Shoes_Black_B37803_010_hover_standard.jpg',
    price: 80
  },
  {
    productID: 6,
    productName: 'SOBAKOV SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_010_hover_standard.jpg',
    price: 90
  },
  {
    productID: 7,
    productName: 'CROPPED HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_01_laydown.jpg',
    price: 90
  },
  {
    productID: 8,
    productName: 'SOBAKOV SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_010_hover_standard.jpg',
    price: 140
  },
  {
    productID: 9,
    productName: 'POD S3 SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_010_hover_standard.jpg',
    price: 130
  },
  {
    productID: 10,
    productName: 'TIRO 19 TRAINING PANTS',
    productType: 'pants',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_01_laydown.jpg',
    price: 100
  },
  {
    productID: 11,
    productName: 'TIRO 19 TRAINING PANTS',
    productType: 'pants',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_01_laydown.jpg',
    price: 140
  },
  {
    productID: 12,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
    price: 80
  },
  {
    productID: 13,
    productName: 'SOBAKOV SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_010_hover_standard.jpg',
    price: 90
  },
  {
    productID: 14,
    productName: 'TREFOIL HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_01_laydown.jpg',
    price: 110
  },
  {
    productID: 15,
    productName: 'ULTRABOOST SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
    price: 100
  },
  {
    productID: 16,
    productName: 'TREFOIL HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_laydown.jpg',
    price: 120
  },
  {
    productID: 17,
    productName: 'CROPPED HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_01_laydown.jpg',
    price: 130
  },
  {
    productID: 18,
    productName: 'PUREBOOST GO SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_010_hover_standard.jpg',
    price: 120
  },
  {
    productID: 19,
    productName: 'ULTRABOOST SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
    price: 80
  },
  {
    productID: 20,
    productName: 'TIRO 19 TRAINING PANTS',
    productType: 'pants',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_01_laydown.jpg',
    price: 80
  },
  {
    productID: 21,
    productName: 'SOBAKOV SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_010_hover_standard.jpg',
    price: 120
  },
  {
    productID: 22,
    productName: 'TIRO 19 TRAINING PANTS',
    productType: 'pants',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_01_laydown.jpg',
    price: 80
  },
  {
    productID: 23,
    productName: 'SWIFT RUN SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/Black/Swift_Run_Shoes_Black_AQ0863_010_hover_standard.jpg',
    price: 120
  },
  {
    productID: 24,
    productName: 'SOBAKOV SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_010_hover_standard.jpg',
    price: 120
  },
  {
    productID: 25,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_010_hover_standard.jpg',
    price: 130
  },
  {
    productID: 26,
    productName: 'TREFOIL HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_laydown.jpg',
    price: 90
  },
  {
    productID: 27,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
    price: 110
  },
  {
    productID: 28,
    productName: 'ULTRABOOST SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
    price: 130
  },
  {
    productID: 29,
    productName: 'ULTRABOOST SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_010_hover_standard.jpg',
    price: 120
  },
  {
    productID: 30,
    productName: 'ULTRABOOST SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_010_hover_standard.jpg',
    price: 80
  },
  {
    productID: 31,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
    price: 110
  },
  {
    productID: 32,
    productName: 'PUREBOOST GO SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_010_hover_standard.jpg',
    price: 80
  },
  {
    productID: 33,
    productName: 'TREFOIL HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_01_laydown.jpg',
    price: 90
  },
  {
    productID: 34,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_010_hover_standard.jpg',
    price: 80
  },
  {
    productID: 35,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_010_hover_standard.jpg',
    price: 120
  },
  {
    productID: 36,
    productName: 'ULTRABOOST SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
    price: 100
  },
  {
    productID: 37,
    productName: 'ULTRABOOST SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
    price: 110
  },
  {
    productID: 38,
    productName: 'POD S3 SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_010_hover_standard.jpg',
    price: 80
  },
  {
    productID: 39,
    productName: 'TREFOIL HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_laydown.jpg',
    price: 130
  },
  {
    productID: 40,
    productName: 'NITE JOGGER SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3.console.aws.amazon.com/s3/object/fecadidas/Adidas%2520JPG/Nite%2520Jogger%2520Shoes%2520-%2520Men/White/Nite_Jogger_Shoes_White_BD7676_010_hover_standard.jpg?region=us-west-1&tab=overview',
    price: 130
  },
  {
    productID: 41,
    productName: 'ULTRABOOST SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
    price: 90
  },
  {
    productID: 42,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_010_hover_standard.jpg',
    price: 80
  },
  {
    productID: 43,
    productName: 'POD S3 SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_010_hover_standard.jpg',
    price: 80
  },
  {
    productID: 44,
    productName: 'CROPPED HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_01_laydown.jpg',
    price: 80
  },
  {
    productID: 45,
    productName: 'CROPPED HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_01_laydown.jpg',
    price: 120
  },
  {
    productID: 46,
    productName: 'POD S3 SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_010_hover_standard.jpg',
    price: 90
  },
  {
    productID: 47,
    productName: 'TREFOIL HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_laydown.jpg',
    price: 100
  },
  {
    productID: 48,
    productName: 'SOBAKOV SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_010_hover_standard.jpg',
    price: 130
  },
  {
    productID: 49,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_010_hover_standard.jpg',
    price: 90
  },
  {
    productID: 50,
    productName: 'TREFOIL HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_01_laydown.jpg',
    price: 80
  },
  {
    productID: 51,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
    price: 90
  },
  {
    productID: 52,
    productName: 'ULTRABOOST SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
    price: 120
  },
  {
    productID: 53,
    productName: 'TREFOIL HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_laydown.jpg',
    price: 80
  },
  {
    productID: 54,
    productName: 'TREFOIL HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_01_laydown.jpg',
    price: 80
  },
  {
    productID: 55,
    productName: 'SOBAKOV SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_010_hover_standard.jpg',
    price: 120
  },
  {
    productID: 56,
    productName: 'PUREBOOST GO SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_010_hover_standard.jpg',
    price: 140
  },
  {
    productID: 57,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_010_hover_standard.jpg',
    price: 140
  },
  {
    productID: 58,
    productName: 'NMD_R1 SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_Shoes_Blue_BD8030_01_standard.jpg',
    price: 140
  },
  {
    productID: 59,
    productName: 'TREFOIL HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_laydown.jpg',
    price: 80
  },
  {
    productID: 60,
    productName: 'TIRO 19 TRAINING PANTS',
    productType: 'pants',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_01_laydown.jpg',
    price: 90
  },
  {
    productID: 61,
    productName: 'POD S3 SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_010_hover_standard.jpg',
    price: 120
  },
  {
    productID: 62,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
    price: 130
  },
  {
    productID: 63,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_010_hover_standard.jpg',
    price: 90
  },
  {
    productID: 64,
    productName: 'TIRO 19 TRAINING PANTS',
    productType: 'pants',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_01_laydown.jpg',
    price: 90
  },
  {
    productID: 65,
    productName: 'ULTRABOOST SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
    price: 100
  },
  {
    productID: 66,
    productName: 'TIRO 19 TRAINING PANTS',
    productType: 'pants',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_01_laydown.jpg',
    price: 110
  },
  {
    productID: 67,
    productName: 'POD S3 SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_010_hover_standard.jpg',
    price: 110
  },
  {
    productID: 68,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
    price: 110
  },
  {
    productID: 69,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
    price: 90
  },
  {
    productID: 70,
    productName: 'TIRO 19 TRAINING PANTS',
    productType: 'pants',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_01_laydown.jpg',
    price: 120
  },
  {
    productID: 71,
    productName: 'POD S3 SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_010_hover_standard.jpg',
    price: 110
  },
  {
    productID: 72,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
    price: 130
  },
  {
    productID: 73,
    productName: 'PUREBOOST GO SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_010_hover_standard.jpg',
    price: 140
  },
  {
    productID: 74,
    productName: 'CROPPED HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_01_laydown.jpg',
    price: 100
  },
  {
    productID: 75,
    productName: 'CROPPED HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_01_laydown.jpg',
    price: 140
  },
  {
    productID: 76,
    productName: 'NMD_R1 SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/pinkShoe.jpg',
    price: 140
  },
  {
    productID: 77,
    productName: 'NMD_R1 SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/pinkShoe.jpg',
    price: 80
  },
  {
    productID: 78,
    productName: 'NITE JOGGER SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_010_hover_standard.jpg',
    price: 90
  },
  {
    productID: 79,
    productName: 'SOBAKOV SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_010_hover_standard.jpg',
    price: 120
  },
  {
    productID: 80,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_010_hover_standard.jpg',
    price: 130
  },
  {
    productID: 81,
    productName: 'NITE JOGGER SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_010_hover_standard.jpg',
    price: 110
  },
  {
    productID: 82,
    productName: 'SWIFT RUN SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_010_hover_standard.jpg',
    price: 120
  },
  {
    productID: 83,
    productName: 'PUREBOOST GO SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_010_hover_standard.jpg',
    price: 90
  },
  {
    productID: 84,
    productName: 'SWIFT RUN SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_010_hover_standard.jpg',
    price: 140
  },
  {
    productID: 85,
    productName: 'ULTRABOOST SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
    price: 110
  },
  {
    productID: 86,
    productName: 'SOBAKOV SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_010_hover_standard.jpg',
    price: 140
  },
  {
    productID: 87,
    productName: 'ULTRABOOST SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
    price: 120
  },
  {
    productID: 88,
    productName: 'NMD_R1 SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/pinkShoe.jpg',
    price: 140
  },
  {
    productID: 89,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_010_hover_standard.jpg',
    price: 130
  },
  {
    productID: 90,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
    price: 130
  },
  {
    productID: 91,
    productName: 'NMD_R1 SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/pinkShoe.jpg',
    price: 140
  },
  {
    productID: 92,
    productName: 'SOBAKOV SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_010_hover_standard.jpg',
    price: 110
  },
  {
    productID: 93,
    productName: 'TREFOIL HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_01_laydown.jpg',
    price: 110
  },
  {
    productID: 94,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_010_hover_standard.jpg',
    price: 80
  },
  {
    productID: 95,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_010_hover_standard.jpg',
    price: 90
  },
  {
    productID: 96,
    productName: 'NITE JOGGER SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_010_hover_standard.jpg',
    price: 110
  },
  {
    productID: 97,
    productName: 'NMD_R1 SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_Shoes_Blue_BD8030_01_standard.jpg',
    price: 140
  },
  {
    productID: 98,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
    price: 130
  },
  {
    productID: 99,
    productName: 'TREFOIL HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_laydown.jpg',
    price: 120
  },
  {
    productID: 100,
    productName: 'NMD_R1 SHOES',
    productType: 'shoes',
    imageUrl: 'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/pinkShoe.jpg',
    price: 120
  }
];



const categories = ['White Shoes', 'Black Shoes', 'Bags', 'Sports Bag', 'Sports Bra', 'Sports Shoes', 'Soccer Shoes', 'Basketball Shoes', 'Shoes', 'Kids Shoes', 'Clothing',
  'Women Clothing', 'Men Shoes', 'Under', 'Underwear', 'Shirt'];
const producNumbers = [1742, 1232, 46, 472, 872, 290, 430, 1382, 600, 642, 756];
const ratings = [3.1, 3.2 ,3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0]
const dummyDataCreator = (data) => {
    var sampleData = [];
    data.forEach(product =>{
      var randomCategory = Math.floor(Math.random() * Math.floor(categories.length))
      var randomProductNumber = Math.floor(Math.random() * Math.floor(producNumbers.length))
      var randomRating = Math.floor(Math.random() * Math.floor(ratings.length))
      var comment = Math.floor(Math.random() * Math.floor(2000))
      var innerObject = {productID: product.productID, productName: product.productName, productType: product.productType,
      imageUrl: product.imageUrl, price: product.price, rating: ratings[randomRating], comments: comment,
       category: categories[randomCategory], productNumber: producNumbers[randomProductNumber]};
        sampleData.push(innerObject)
    })
    return sampleData;
}
const dummyData = dummyDataCreator(data)

const insertSampleData = () => {
  Product.create(dummyData)
    .then(() => db.disconnect())
};
insertSampleData();