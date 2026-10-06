# SHR-CORE-001

โค้ดกลางที่ทุก API ใช้ร่วมกัน

## ไฟล์หลัก

- `ApiResponse.cs` — รูปแบบ Response กลางของ API
- `ApiError.cs` — รายละเอียด Error
- `AppException.cs` — Exception สำหรับ Error ที่เราควบคุมได้
- `ExceptionMiddleware.cs` — ดัก Error จากจุดเดียว

## ตัวอย่าง Response สำเร็จ

```csharp
return Ok(ApiResponse<ProductResponse>.Ok(product, "Product retrieved successfully"));
```

## ตัวอย่าง Error

```csharp
throw new AppException("Product not found", 404, "NOT_FOUND");
```

ไม่ต้องเขียน `try-catch` ซ้ำในทุก Controller เพราะ `ExceptionMiddleware` ถูกลงทะเบียนไว้ใน `Program.cs` แล้ว
