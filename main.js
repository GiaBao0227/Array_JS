// Khai báo mảng chứa các số người dùng nhập
const numbers = [];

// Tham chiếu đến các phần tử HTML
const numberInput = document.getElementById("mainNumberInput");
const addNumberButton = document.getElementById("addMainNumber");
const numbersText = document.getElementById("mainArrayText");

/**
 * Mô hình 3 khối để tính tổng các số dương trong mảng
    1. Khối nhập liệu (Input)
      Mục tiêu: Nhận dữ liệu đầu vào là một mảng các số (cả số dương, âm và số 0).
      Dữ liệu đầu vào:
      Mảng các số, ví dụ: [1, -3, 5, -7, 9, 0].
      Mảng có thể rỗng hoặc chứa bất kỳ số nguyên nào.
    2. Khối xử lý (Process)
      Bước 1: Duyệt qua từng phần tử trong mảng.
      Bước 2: Kiểm tra điều kiện:
        Nếu phần tử là số dương (lớn hơn 0), đưa nó vào danh sách các số hợp lệ.
      Bước 3: Tính tổng của các số dương đã lọc được.
        Cộng tất cả các số trong danh sách các số dương lại.
        Nếu mảng không có số dương, tổng là 0.
    3. Khối xuất kết quả (Output)
      Kết quả: In ra tổng của các số dương.
      Trường hợp đặc biệt: Nếu mảng không chứa số dương, thông báo "Không có số dương trong mảng".
 */

// Tham chiếu đến phần tính tổng số dương
const calculateSumButton = document.querySelector("#feature1 .btn-success");
const feature1Result = document.querySelector("#feature1Result span");

// Hàm thêm số vào danh sách
addNumberButton.addEventListener("click", () => {
  const value = numberInput.value.trim(); // Lấy giá trị từ input

  // Kiểm tra giá trị hợp lệ
  if (value === "" || isNaN(value)) {
    alert("Vui lòng nhập một số hợp lệ!");
    return;
  }

  // Thêm số vào mảng
  const number = parseFloat(value);
  numbers.push(number);

  // Cập nhật giao diện
  numbersText.textContent = numbers.join(", "); // Hiển thị danh sách số
  numberInput.value = ""; // Xóa input sau khi thêm
  numberInput.focus(); // Trả lại focus
});

// Hàm tính tổng số dương
calculateSumButton.addEventListener("click", () => {
  if (numbers.length === 0) {
    alert("Không có số nào để tính tổng!");
    return;
  }

  // Tính tổng các số dương
  const positiveSum = numbers
    .filter((num) => num > 0) // Lọc các số dương
    .reduce((total, num) => total + num, 0); // Tính tổng

  // Hiển thị kết quả
  feature1Result.textContent = positiveSum;
});
/**
 *Mô hình 3 khối để đếm số lượng số dương trong mảng
    1. Khối nhập liệu (Input)
      Mục tiêu: Nhận một mảng số từ người dùng.
      Dữ liệu đầu vào:
      Một mảng các số nguyên, ví dụ: [1, -3, 5, -7, 9, 0].
      Mảng này có thể rỗng, chỉ chứa số âm, hoặc chỉ chứa số dương.
    2. Khối xử lý (Process)
      Mục tiêu: Tìm số lượng các số dương trong mảng.
      Bước 1: Khởi tạo biến đếm (count)
        Tạo một biến count ban đầu bằng 0.
        Biến này sẽ lưu số lượng các số dương.
      Bước 2: Duyệt qua từng phần tử trong mảng
        Sử dụng vòng lặp for để duyệt qua từng phần tử trong mảng.
      Bước 3: Kiểm tra từng phần tử
        Mỗi lần duyệt, kiểm tra xem phần tử hiện tại có lớn hơn 0 hay không:
        Nếu có (array[i] > 0):
        Tăng biến count lên 1.
        Nếu không:
        Bỏ qua phần tử đó và tiếp tục duyệt phần tử tiếp theo.
      Bước 4: Kết thúc vòng lặp
        Khi đã duyệt hết mảng, giá trị của count sẽ là số lượng các số dương.
    3. Khối xuất kết quả (Output)
      Kết quả đầu ra:
        Trả về số lượng các số dương trong mảng.
      Trường hợp đặc biệt:
        Nếu mảng không chứa số dương, kết quả trả về là 0.
        Nếu mảng rỗng, kết quả cũng là 0.
 */
//Đếm số dương
// Tham chiếu đến phần đếm số dương
const countPositiveButton = document.querySelector("#feature2 .btn-success");
const feature2Result = document.querySelector("#feature2Result span");

// Hàm đếm số dương và hiển thị danh sách số dương
countPositiveButton.addEventListener("click", () => {
  if (numbers.length === 0) {
    alert("Không có số nào để đếm!");
    feature2Result.textContent = "Chưa có kết quả";
    return;
  }

  // Lọc các số dương trong mảng
  const positiveNumbers = numbers.filter((num) => num > 0);

  if (positiveNumbers.length === 0) {
    feature2Result.textContent = "Không có số dương nào";
    return;
  }

  // Hiển thị kết quả (số lượng và danh sách số dương)
  feature2Result.textContent = `Số dương: ${
    positiveNumbers.length
  }, Danh sách: ${positiveNumbers.join(", ")}`;
});
const positiveList = document.getElementById("positiveList");

countPositiveButton.addEventListener("click", () => {
  if (numbers.length === 0) {
    alert("Không có số nào để đếm!");
    feature2Result.textContent = "Chưa có kết quả";
    positiveList.innerHTML = ""; // Xóa danh sách cũ
    return;
  }

  const positiveNumbers = numbers.filter((num) => num > 0);

  if (positiveNumbers.length === 0) {
    feature2Result.textContent = "Không có số dương nào";
    positiveList.innerHTML = ""; // Xóa danh sách cũ
    return;
  }

  feature2Result.textContent = `Số dương: ${positiveNumbers.length}`;

  // Hiển thị danh sách các số dương
  positiveList.innerHTML = ""; // Xóa danh sách cũ
  positiveNumbers.forEach((num) => {
    const li = document.createElement("li");
    li.textContent = num;
    li.classList.add("list-group-item");
    positiveList.appendChild(li);
  });
});

/**
 *Mô hình 3 khối để tìm số nhỏ nhất trong mảng
    1. Khối nhập liệu (Input)
      Mục tiêu: Nhận dữ liệu đầu vào là một mảng số.
      Dữ liệu đầu vào:
      Một mảng các số nguyên hoặc số thực, ví dụ: [4, -2, 9, 7, -5].
      Mảng có thể chứa bất kỳ giá trị nào, nhưng giả định rằng nó không rỗng.
    2. Khối xử lý (Process)
      Mục tiêu: Tìm số nhỏ nhất trong mảng.
      Bước 1: Khởi tạo biến min
        Gán giá trị đầu tiên của mảng (array[0]) cho biến min.
        Biến min sẽ lưu trữ giá trị nhỏ nhất trong quá trình tìm kiếm.
      Bước 2: Duyệt qua từng phần tử trong mảng
        Sử dụng vòng lặp for để duyệt qua từng phần tử bắt đầu từ vị trí thứ hai (i = 1).
      Bước 3: So sánh từng phần tử với min
        Nếu phần tử hiện tại nhỏ hơn min:
        Cập nhật giá trị của min thành phần tử đó.
      Bước 4: Kết thúc vòng lặp
        Sau khi duyệt qua toàn bộ mảng, giá trị của min là số nhỏ nhất.
    3. Khối xuất kết quả (Output)
      Kết quả đầu ra:
        Trả về số nhỏ nhất trong mảng.
      Trường hợp đặc biệt:
        Nếu mảng chỉ có một phần tử, kết quả trả về là chính phần tử đó.
        Nếu mảng rỗng, có thể trả về thông báo lỗi hoặc một giá trị mặc định (ví dụ: null hoặc undefined).
 */
//Tìm số nhỏ nhất
// Tham chiếu đến phần tìm số nhỏ nhất
const findMinButton = document.querySelector("#feature3 .btn-success");
const feature3Result = document.querySelector("#feature3Result span");

// Hàm tìm số nhỏ nhất trong mảng
findMinButton.addEventListener("click", () => {
  if (numbers.length === 0) {
    alert("Không có số nào trong danh sách để tìm!");
    feature3Result.textContent = "Chưa có kết quả";
    return;
  }

  // Tìm số nhỏ nhất trong mảng
  const minNumber = Math.min(...numbers);

  // Hiển thị kết quả
  feature3Result.textContent = `Số nhỏ nhất là: ${minNumber}`;
});

/**
 * Mô hình 3 khối để tìm số dương nhỏ nhất trong mảng
    1. Khối nhập liệu (Input)
      Mục tiêu: Nhận dữ liệu đầu vào là một mảng các số.
      Dữ liệu đầu vào:
        Một mảng chứa số nguyên hoặc số thực, ví dụ: [4, -2, 9, 7, -5, 3].
        Mảng có thể chứa cả số âm, số dương, và số 0.
        Giả định rằng mảng không rỗng và có ít nhất một số dương.
    2. Khối xử lý (Process)
      Mục tiêu: Tìm số dương nhỏ nhất trong mảng.
        Bước 1: Lọc ra các số dương từ mảng
          Sử dụng vòng lặp hoặc phương thức filter để tạo một mảng chỉ chứa các số dương.
        Bước 2: Kiểm tra nếu không có số dương
          Nếu mảng lọc ra rỗng, trả về thông báo "Không có số dương trong mảng".
        Bước 3: Tìm số nhỏ nhất trong mảng số dương
          Khởi tạo một biến min bằng giá trị đầu tiên trong mảng số dương.
          Duyệt qua mảng số dương và so sánh từng phần tử với min:
          Nếu phần tử nhỏ hơn min, cập nhật min.
    3. Khối xuất kết quả (Output)
      Kết quả đầu ra:
        Trả về số dương nhỏ nhất trong mảng.
        Trường hợp đặc biệt:
          Nếu không có số dương, trả về thông báo "Không có số dương trong mảng".
 * 
 */
//
// Tham chiếu đến phần tìm số dương nhỏ nhất
const findMinPositiveButton = document.querySelector("#feature4 .btn-success");
const feature4Result = document.querySelector("#feature4Result span");

// Hàm tìm số dương nhỏ nhất trong mảng
findMinPositiveButton.addEventListener("click", () => {
  if (numbers.length === 0) {
    alert("Không có số nào trong danh sách để tìm!");
    feature4Result.textContent = "Chưa có kết quả";
    return;
  }

  // Lọc các số dương trong mảng
  const positiveNumbers = numbers.filter((num) => num > 0);

  if (positiveNumbers.length === 0) {
    feature4Result.textContent = "Không có số dương nào trong mảng";
    return;
  }

  // Tìm số dương nhỏ nhất
  const minPositive = Math.min(...positiveNumbers);

  // Hiển thị kết quả
  feature4Result.textContent = `Số dương nhỏ nhất là: ${minPositive}`;
});

/**
 * Mô hình 3 khối để tìm số dương nhỏ nhất và số chẵn cuối cùng trong mảng
    1. Khối nhập liệu (Input)
      Mục tiêu: Nhận một mảng các số từ người dùng.
      Dữ liệu đầu vào:
        Một mảng chứa các số nguyên hoặc số thực, ví dụ: [4, -2, 9, 7, -5, 3, 8, 2].
        Mảng có thể chứa cả số âm, số dương, và số 0.
        Giả định rằng mảng không rỗng.
    2. Khối xử lý (Process)
      Mục tiêu:
        Tìm số dương nhỏ nhất trong mảng.
        Tìm số chẵn cuối cùng trong mảng.
      Tìm số dương nhỏ nhất
        1.Lọc các số dương từ mảng:
          Tạo một mảng chứa các số dương (lớn hơn 0) từ mảng đầu vào.
        2.Kiểm tra nếu không có số dương:
          Nếu mảng số dương rỗng, trả về thông báo "Không có số dương trong mảng".
        3.Tìm số nhỏ nhất:
          Duyệt qua mảng số dương để tìm số nhỏ nhất.
      Tìm số chẵn cuối cùng
        1.Duyệt ngược mảng đầu vào:
          Kiểm tra từng phần tử từ cuối lên đầu.
        2.Kiểm tra tính chẵn:
          Nếu phần tử chia hết cho 2, đó là số chẵn cuối cùng.
        3.Nếu không có số chẵn:
          Trả về giá trị -1.
    3. Khối xuất kết quả (Output)
      Trả về một đối tượng chứa:
        Số dương nhỏ nhất: Nếu không có, trả về thông báo phù hợp.
        Số chẵn cuối cùng: Nếu không có, trả về -1.
 * 
 */
// Tham chiếu đến phần tìm số chẵn cuối cùng
const findLastEvenButton = document.querySelector("#feature5 .btn-success");
const feature5Result = document.querySelector("#feature5Result span");

// Hàm tìm số chẵn cuối cùng trong mảng
findLastEvenButton.addEventListener("click", () => {
  if (numbers.length === 0) {
    alert("Không có số nào trong danh sách để tìm!");
    feature5Result.textContent = "Chưa có kết quả";
    return;
  }

  // Tìm số chẵn cuối cùng
  const lastEven = numbers
    .slice()
    .reverse()
    .find((num) => num % 2 === 0);

  if (lastEven !== undefined) {
    // Hiển thị số chẵn cuối cùng trên giao diện
    feature5Result.textContent = `Số chẵn cuối cùng là: ${lastEven}`;
  } else {
    // Không hiển thị kết quả trên giao diện
    feature5Result.textContent = "";
    // Log -1 ra console
    console.log("-1");
  }
});

/**
 * Mô hình 3 khối để đổi chỗ 2 giá trị trong mảng theo vị trí
    1. Khối nhập liệu (Input)
      Mục tiêu: Nhận đầu vào là:
        Một mảng các giá trị (có thể là số, chuỗi, hoặc giá trị khác).
        Hai vị trí cần đổi chỗ trong mảng (giả định rằng chúng hợp lệ).
      Dữ liệu đầu vào:
        Mảng, ví dụ: [1, 2, 3, 4, 5].
        Hai vị trí (chỉ số) muốn đổi chỗ:
        Vị trí 1: index1 (ví dụ: 1, tương ứng với phần tử thứ 2 trong mảng).
        Vị trí 2: index2 (ví dụ: 3, tương ứng với phần tử thứ 4 trong mảng).
    2. Khối xử lý (Process)
      Mục tiêu: Đổi chỗ hai phần tử trong mảng theo chỉ số được cung cấp.
        1.Kiểm tra tính hợp lệ của hai chỉ số:
          Xác định hai chỉ số có nằm trong phạm vi của mảng không.
          Nếu không hợp lệ, trả về thông báo lỗi.
        2.Thực hiện đổi chỗ:
          Dùng một biến tạm temp để lưu giá trị của phần tử tại index1.
          Gán giá trị tại index2 cho index1.
          Gán giá trị của biến tạm cho index2.
    3. Khối xuất kết quả (Output)
      Kết quả đầu ra:
        Mảng sau khi đã đổi chỗ hai phần tử tại các vị trí được chỉ định.
        Nếu chỉ số không hợp lệ, thông báo lỗi và không thực hiện đổi chỗ.
 */
// Tham chiếu đến các thẻ input và nút "Đổi chỗ"
const swapIndex1Input = document.querySelector("#swapIndex1");
const swapIndex2Input = document.querySelector("#swapIndex2");
const swapButton = document.querySelector("#feature6 .btn-success");
const feature6Result = document.querySelector("#feature6Result span");

// Hàm đổi chỗ hai giá trị trong mảng
swapButton.addEventListener("click", () => {
  if (numbers.length < 2) {
    alert("Cần ít nhất 2 giá trị trong mảng để thực hiện đổi chỗ!");
    feature6Result.textContent = "Chưa có kết quả";
    return;
  }

  // Lấy giá trị từ input
  const index1 = parseInt(swapIndex1Input.value);
  const index2 = parseInt(swapIndex2Input.value);

  // Kiểm tra tính hợp lệ của hai vị trí
  if (
    isNaN(index1) ||
    isNaN(index2) ||
    index1 < 0 ||
    index2 < 0 ||
    index1 >= numbers.length ||
    index2 >= numbers.length
  ) {
    alert("Vị trí không hợp lệ! Vui lòng nhập lại.");
    feature6Result.textContent = "Chưa có kết quả";
    return;
  }

  // Thực hiện hoán đổi giá trị
  [numbers[index1], numbers[index2]] = [numbers[index2], numbers[index1]];

  // Hiển thị mảng sau khi đổi chỗ
  feature6Result.textContent = `Mảng sau khi đổi chỗ: ${numbers.join(", ")}`;
});

/**
 * Mô hình 3 khối để sắp xếp mảng theo thứ tự tăng dần
    1. Khối nhập liệu (Input)
      Mục tiêu: Nhận đầu vào là một mảng chứa các giá trị (có thể là số hoặc chuỗi).
        1.Dữ liệu đầu vào:
          Mảng các số nguyên, số thực hoặc chuỗi ký tự. Ví dụ:
            Mảng số: [4, 1, 7, 3, 5].
            Mảng chuỗi: ["b", "a", "d", "c"].
            Yêu cầu sắp xếp mảng theo thứ tự tăng dần.
    2. Khối xử lý (Process)
      Mục tiêu: Sắp xếp mảng theo thứ tự tăng dần.
        1.Kiểm tra tính hợp lệ của mảng:
          Mảng không được rỗng.
          Tất cả phần tử phải đồng nhất (chỉ số hoặc chỉ chuỗi).
        2.Sử dụng thuật toán sắp xếp:
          Dùng hàm sort của JavaScript:
            Với mảng số, dùng hàm so sánh a - b để sắp xếp tăng dần.
            Với mảng chuỗi, sắp xếp dựa trên thứ tự từ điển mặc định.
        3.Xử lý trường hợp đặc biệt:
          Nếu mảng trống, trả về mảng trống.
    3. Khối xuất kết quả (Output)
      Kết quả đầu ra:
        Mảng đã được sắp xếp theo thứ tự tăng dần.
 * 
 */
// Tham chiếu đến nút "Sắp xếp tăng dần" và vùng hiển thị kết quả
const sortAscendingButton = document.querySelector("#feature7 .btn-success");
const feature7Result = document.querySelector("#feature7Result span");

// Hàm sắp xếp mảng theo thứ tự tăng dần
sortAscendingButton.addEventListener("click", () => {
  if (numbers.length === 0) {
    alert("Mảng hiện tại đang trống! Vui lòng thêm số trước khi sắp xếp.");
    feature7Result.textContent = "Chưa có kết quả";
    return;
  }

  // Thực hiện sắp xếp
  const sortedArray = [...numbers].sort((a, b) => a - b); // Copy mảng và sắp xếp tăng dần

  // Hiển thị kết quả trên giao diện
  feature7Result.textContent = `Mảng sau khi sắp xếp: ${sortedArray.join(
    ", "
  )}`;
});

/**
 * Mô hình 3 lớp theo logic để tìm số nguyên tố đầu tiên trong mảng
    1. Khối nhập liệu (Input)
      Mục tiêu: Nhận vào một mảng các số nguyên.
      Dữ liệu đầu vào:
        Một mảng chứa các số nguyên (có thể là số dương, số âm hoặc số 0). Ví dụ:
          Mảng số: [4, 6, 7, 10, 13].
          Mảng có thể chứa cả số âm và số không, nhưng chỉ các số nguyên dương mới có thể là số nguyên tố.
    2. Khối xử lý (Process)
      Mục tiêu:
        Tìm số nguyên tố đầu tiên trong mảng (nếu có).
      1.Kiểm tra tính nguyên tố:
        Số nguyên tố là một số nguyên lớn hơn 1 và chỉ chia hết cho 1 và chính nó.
        Kiểm tra từng số trong mảng xem có phải là số nguyên tố hay không.
        Để kiểm tra số nguyên tố, ta cần:
          Nếu số nhỏ hơn hoặc bằng 1, thì không phải là số nguyên tố.
          Dùng vòng lặp để kiểm tra xem số đó có chia hết cho bất kỳ số nào từ 2 đến căn bậc hai của số đó hay không.
      2.Duyệt qua mảng:
        Lặp qua từng phần tử trong mảng và kiểm tra xem phần tử đó có phải là số nguyên tố không.
        Nếu tìm thấy số nguyên tố đầu tiên, trả về số đó và dừng vòng lặp.
        Nếu không tìm thấy số nguyên tố nào, trả về -1.
    3. Khối xuất kết quả (Output)
      Kết quả đầu ra:
        Trả về số nguyên tố đầu tiên trong mảng, hoặc nếu không tìm thấy, trả về -1.
 * 
 */
// Tham chiếu đến nút "Tìm số nguyên tố" và vùng hiển thị kết quả
const findPrimeButton = document.querySelector("#feature8 .btn-success");
const feature8Result = document.querySelector("#feature8Result span");

// Hàm kiểm tra số nguyên tố
function isPrime(num) {
  if (num <= 1) return false; // Số nhỏ hơn hoặc bằng 1 không phải là số nguyên tố
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // Nếu có ước chung với i, thì không phải số nguyên tố
  }
  return true;
}

// Hàm tìm số nguyên tố đầu tiên trong mảng
findPrimeButton.addEventListener("click", () => {
  if (numbers.length === 0) {
    alert("Mảng hiện tại đang trống! Vui lòng thêm số trước khi tìm.");
    feature8Result.textContent = "Chưa có kết quả";
    return;
  }

  // Duyệt qua mảng và tìm số nguyên tố đầu tiên
  const prime = numbers.find((num) => isPrime(num));

  // Hiển thị kết quả
  if (prime !== undefined) {
    feature8Result.textContent = `Số nguyên tố đầu tiên: ${prime}`;
  } else {
    feature8Result.textContent = "Không có số nguyên tố trong mảng";
    console.log("-1"); // Log -1 vào console nếu không tìm thấy số nguyên tố
  }
});

/**
 * Mô hình 3 lớp theo logic để tìm số nguyên trong mảng số thực
    1. Khối nhập liệu (Input)
      Mục tiêu: Nhận vào một mảng chứa các số thực.
      Dữ liệu đầu vào:
        Mảng số thực, bao gồm cả số nguyên và số thực (có phần thập phân).
        Ví dụ: [1.2, 3.5, 4, 6.1, 7].
        Chúng ta cần tìm số nguyên trong mảng này (những số có phần thập phân bằng 0).
    2. Khối xử lý (Process)
      Mục tiêu: Tìm và đếm số nguyên trong mảng số thực.
        1.Kiểm tra tính nguyên:
          Để kiểm tra một số có phải là số nguyên, ta có thể sử dụng phương thức Number.isInteger() trong JavaScript.
            Number.isInteger(x) sẽ trả về true nếu x là một số nguyên (không có phần thập phân).
        2.Duyệt qua mảng:
          Lặp qua từng phần tử trong mảng và kiểm tra xem phần tử đó có phải là số nguyên không.
          Đếm số nguyên tìm thấy.
        3.Kết quả:
          Sau khi duyệt qua toàn bộ mảng, trả về số lượng số nguyên.
    3. Khối xuất kết quả (Output)
      Kết quả đầu ra:
        Trả về số lượng các số nguyên có trong mảng số thực.
        Nếu mảng không có số nguyên, kết quả trả về là 0.
 */
let realNumbers = []; // Mảng chứa các số thực

// Tham chiếu đến các ô nhập liệu, nút thêm số và kết quả hiển thị
const realNumberInput1 = document.getElementById("realNumberInput1");
const addRealNumberButton = document.getElementById("addRealNumberButton");
const realNumbersText = document.getElementById("realNumbersText");
const countIntegersButton = document.getElementById("countIntegersButton");
const feature9Result = document.getElementById("feature9Result");

// Thêm số thực vào mảng khi nhấn nút "Thêm Số"
addRealNumberButton.addEventListener("click", () => {
  const number1 = parseFloat(realNumberInput1.value);
  // Kiểm tra xem người dùng có nhập hợp lệ không
  if (!isNaN(number1)) {
    // Thêm số vào mảng
    realNumbers.push(number1);
    // Hiển thị các số đã thêm
    realNumbersText.textContent = realNumbers.join(", ");

    // Xóa giá trị các ô input sau khi thêm số
    realNumberInput1.value = "";
  } else {
    alert("Vui lòng nhập các số hợp lệ.");
  }
});

// Đếm số nguyên trong mảng
countIntegersButton.addEventListener("click", () => {
  const integersCount = realNumbers.filter((num) =>
    Number.isInteger(num)
  ).length;

  // Hiển thị kết quả
  feature9Result.innerHTML = `<strong>Kết quả:</strong> Có ${integersCount} số nguyên trong mảng.`;
});

/** 
*Mô hình 3 lớp theo logic để so sánh số lượng số dương và số lượng số âm trong mảng
  1. Khối nhập liệu (Input)
    Mục tiêu: Nhận vào một mảng các số thực hoặc nguyên.
    Dữ liệu đầu vào:
      Mảng chứa các số nguyên và số thực, có thể là số dương, số âm, hoặc số 0.
      Ví dụ: [3, -2, 0, 7, -1, 4, -3].
      Mảng có thể chứa số 0, nhưng số 0 không được tính vào số lượng số dương hay âm.
  2. Khối xử lý (Process)
    Mục tiêu:
    Đếm số lượng số dương và số lượng số âm trong mảng, rồi so sánh chúng.
      1.Đếm số dương và số âm:
        Duyệt qua từng phần tử trong mảng.
        Tăng biến đếm cho số dương nếu phần tử lớn hơn 0.
        Tăng biến đếm cho số âm nếu phần tử nhỏ hơn 0.
        Số bằng 0 không được tính vào cả hai.
      2.So sánh số lượng:
        So sánh số lượng số dương với số lượng số âm.
        Nếu số lượng số dương lớn hơn số lượng số âm, trả về "Dương nhiều hơn".
        Nếu số lượng số âm lớn hơn số lượng số dương, trả về "Âm nhiều hơn".
        Nếu số lượng bằng nhau, trả về "Số lượng bằng nhau".
  3. Khối xuất kết quả (Output)
    Kết quả đầu ra:
      Trả về kết quả so sánh số lượng số dương và số lượng số âm:
        "Dương nhiều hơn",
        "Âm nhiều hơn",
        "Số lượng bằng nhau". 
*/
// Giả sử mảng chứa các giá trị đã được nhập từ các ô input.
let numberArray = [1, -3, 4, 5, -2, -7, 6]; // Mảng mẫu

// Lấy phần tử cần sử dụng từ HTML.
const compareButton = document.getElementById('compareButton');
const feature10Result = document.getElementById('feature10Result');

// Hàm kiểm tra và so sánh số dương và số âm
compareButton.addEventListener('click', function() {
  // Đếm số lượng số dương và số âm trong mảng
  let positiveCount = 0;
  let negativeCount = 0;

  numberArray.forEach(function(number) {
    if (number > 0) {
      positiveCount++;
    } else if (number < 0) {
      negativeCount++;
    }
  });

  // So sánh số lượng số dương và số âm
  let resultText = '';
  if (positiveCount > negativeCount) {
    resultText = `Số dương > số âm. ( Dương: ${positiveCount}, Âm: ${negativeCount} )`;
  } else if (positiveCount < negativeCount) {
    resultText = `Số âm > số dương. ( Dương: ${positiveCount}, Âm: ${negativeCount} )`;
  } else {
    resultText = `Số dương và số âm bằng nhau. ( Dương: ${positiveCount}, Âm: ${negativeCount} )`;
  }

  // Hiển thị kết quả
  feature10Result.innerHTML = `<strong>Kết quả:</strong> <span>${resultText}</span>`;
});
