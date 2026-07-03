# ศาลพระพรหมเอราวัณ — Erawan Shrine Website

เว็บไซต์ใหม่สำหรับศาลพระพรหมเอราวัณ สร้างด้วย Next.js 14 (App Router) + TypeScript + Tailwind CSS

**เนื้อหาหลักของหน้าแรกคือบทสวดบูชาพระพรหม (ไทย/อังกฤษ/จีน)** เนื่องจาก QR Code ที่ศาลลิงก์มายังเว็บนี้โดยตรง — บทสวดจึงถูกวางไว้เป็นจุดแรกที่ผู้เข้าชมเห็นและเข้าถึงได้ทันที ส่วนเนื้อหาอื่น (ประวัติ วิธีสักการะ การเดินทาง แกลเลอรี) เป็นหน้าเสริมที่ลิงก์จากหน้าแรก

## โครงสร้างหน้าเว็บ

- `/` — หน้าแรก: บทสวดมนต์ (สลับภาษาได้), ความหมายสี่หน้า, ลิงก์ไปหน้าอื่น
- `/worship` — วิธีสักการะ, เครื่องสักการะ, ข้อควรปฏิบัติ
- `/history` — ประวัติศาลพระพรหมเอราวัณ
- `/visit` — เวลาเปิด-ปิด, แผนที่, การเดินทาง
- `/gallery` — แกลเลอรีภาพ (ยังเป็น placeholder รอใส่รูปจริง)

> ⚠️ เนื้อหาข้อความ (ประวัติ เวลาเปิด-ปิด ที่อยู่ ฯลฯ) ค้นคว้าและร่างจากแหล่งข้อมูลสาธารณะ ควรตรวจทานความถูกต้องกับทางศาลก่อนเผยแพร่จริง และยังไม่มีรูปถ่ายจริง — ดูวิธีใส่รูปด้านล่าง

## รันดูบนเครื่องตัวเอง

```bash
npm install
npm run dev
```

เปิด http://localhost:3000

## การใส่รูปภาพจริง

วางไฟล์รูปไว้ในโฟลเดอร์ `public/gallery/` แล้วแก้ไข `app/gallery/page.tsx` ให้ใช้ `<Image src="/gallery/ชื่อไฟล์.jpg" ... />` แทนช่อง placeholder

## วิธีอัปโหลดขึ้น GitHub

โฟลเดอร์นี้ตั้งค่า git ไว้แล้ว (init + commit แรกเรียบร้อย) เหลือแค่เชื่อมกับ repo บน GitHub:

1. สร้าง repository ใหม่ที่ https://github.com/new (แนะนำตั้งชื่อ `erawan-shrine`, **ไม่ต้อง** ติ๊ก "Add a README" เพราะมีอยู่แล้ว)
2. ในโฟลเดอร์โปรเจกต์นี้ รันคำสั่ง (แทน `YOUR-USERNAME` ด้วยชื่อ GitHub ของคุณ):

```bash
git remote add origin https://github.com/YOUR-USERNAME/erawan-shrine.git
git branch -M main
git push -u origin main
```

## วิธี Deploy ขึ้น Vercel

1. ไปที่ https://vercel.com/new
2. เลือก "Import Git Repository" แล้วเลือก repo `erawan-shrine` ที่เพิ่ง push ขึ้นไป
3. Vercel จะตรวจพบว่าเป็น Next.js โดยอัตโนมัติ (ไฟล์ `vercel.json` กำหนด framework ไว้แล้ว) — กด **Deploy** ได้เลยโดยไม่ต้องตั้งค่าเพิ่ม
4. เมื่อ deploy เสร็จ จะได้ URL ชั่วคราวแบบ `erawan-shrine.vercel.app`
5. ผูกโดเมนของจริง (เช่น `erawanshrine.com`): ไปที่ Project → Settings → Domains → เพิ่มโดเมน แล้วไปตั้งค่า DNS (CNAME/A record) ตามที่ Vercel แนะนำที่ผู้ให้บริการโดเมนเดิม

หลังจากเชื่อม GitHub กับ Vercel แล้ว ทุกครั้งที่ `git push` โค้ดใหม่ Vercel จะ build และ deploy ให้อัตโนมัติ

## เทคโนโลยีที่ใช้

- [Next.js 14](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS
