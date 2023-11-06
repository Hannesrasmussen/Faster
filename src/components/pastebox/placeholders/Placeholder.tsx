const placeholders: string[] = [
     `function greet(name) {
        console.log("Hello, " + name + "!");
      }
      
      let numbers = [1, 2, 3, 4, 5];
      let sum = numbers.reduce((acc, curr) => acc + curr, 0);
      console.log("Sum:", sum);
      
      const currentDate = new Date();
      console.log("Current Date:", currentDate.toDateString());`,
      `int main() {
        cout << "Hello, World!" << endl;
    
        int numbers[] = {1, 2, 3, 4, 5};
        int sum = 0;
        for (int i = 0; i < 5; ++i) {
            sum += numbers[i];
        }
        cout << "Sum: " << sum << endl;
    
        string message = "C++ Programming";
        cout << "Message: " << message << endl;
    
        return 0;
    }`,
    `.container {
      width: 100%;
      height: 200px;
      background-color: #f2f2f2;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .button {
      padding: 10px 20px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }`
]
export default placeholders
