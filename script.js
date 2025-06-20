function sendToTelegram(lat, lon) {
  const chatId = '8116094262';
  const botToken = '7686639764:AAHMHw-pPHcqBidT_cUkgmUR75Y7s_sY-No';

  const message = `📍 Có người vừa gửi vị trí:\nLatitude: ${lat}\nLongitude: ${lon}\nhttps://www.google.com/maps?q=${lat},${lon}`;

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message
    })
  }).then(res => {
    if (res.ok) {
      alert("✅ Đã gửi vị trí của bạn về Telegram!");
    } else {
      alert("❌ Gửi thất bại. Có thể token hoặc chat_id sai.");
    }
  }).catch(error => {
    alert("❌ Lỗi khi gửi vị trí: " + error.message);
  });
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      sendToTelegram(lat, lon);
    }, function(error) {
      alert("❌ Không lấy được vị trí: " + error.message);
    });
  } else {
    alert("❌ Trình duyệt không hỗ trợ định vị!");
  }
}