# 国外网站

```

```



# 接口

## 登录页面

```
type: post
url: authorizations/
data: {
	username
    password
}
```

## 注册  

```
type: post
url: register/
data: {
	password,
	password2,
	username,
	email,
	first_name,
	last_name,
    mobile,
    gender,
    company,
    allow: true
	firstName,
}
```

## 判断手机号是否存在

```
type: get
url: mobiles/${iphone}/count/
data: {
	mobiles
}
```

### 忘记密码 (暂时不做)  

```
GET  /mobile_codes/?P<mobile>1[3-9]\d{9}/?image_code_id=xxxx&text=xxx
mobile
image_code_id
text
```

### 获取邮箱验证码  (暂时不做)  

```
PUT /email/
email
```

## 修改密码

```
type: put;
url: users/id/
data: {
    "old_password": "1231231231",
	"new_password": "12312312311",
	"confirm_password": "12312312311"
}
```

### 个人中心  

```
GET /user/
```

### 修改个人中心

```
POST /modify_user/
id
titke
last_name
first_name
email
mobile
company_name
```

### 地址管理  

```
GET /addresses/
id
```

### 新增地址

```
POST /add_location/
id
```

### 删除地址（按钮）

```
POST /delete_location/
id
```

### 购买记录

```
GET /goods_record/
id
```

### 购物车  

```
GET /cart/
```

### 修改购物车

```
PUT /cart/
sku_id
count
```

### 勾选商品  

```
DELETE  /cart/
sku_id
```







```
{
	"title": "aa1a",
	"reveiver": "sss1",
	"province": "1111",
	"city": "sss1",
	"district": "sdss1",
	"place": "fff1",
	"mobile": 13487023121,
	"user_id": "2",
	"tel": "111",
	"email": "1@qq.com"
}




```



```
 {      "material":
        "454"
    ,
    "windos_sash_type": 
        "45"
    ,
    "installation_location": 
        "454"
    ,
    "size_type": 
        "555"
    ,
    "length": 
        "524"
    ,
    "width": 
       "202"
    ,
    "midplane_postion": 
        "20"
    ,
    "ploduct_color": 
        "ty"
    ,
    "frame_type": 
        "tyt"
    ,
    "frame_number":
        "tyy"
    ,
    "opening_method": 
        "22"
    ,
    "tcolumn_type": 
        "222"
    ,
    "column_type": 
        "22"
    ,
    "balde_type": 
        "22"
    ,
    "poll_rod_type": 
        "22"
    ,
    "ploo_rod_dis": 
        "11"
    ,
    "hardware_colour": 
        "11"
    ,
    "blade_state": 
        "11"
    ,
    "lower_palte_state": 
        "tt",
  "hardware_type":"eeee",
    "hardware_colour ":"eee",
    "blade_state ":"rrrr",
    "lower_palte_state ":"rrrr",
    "number":"11",
  "user_id":"2"
 }
```

























