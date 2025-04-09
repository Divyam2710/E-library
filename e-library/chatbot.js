class FloatingChatbot {
    constructor() {
      this.apiKey = "secretkay12"; // Replace with your OpenAI API key
      this.initChatbot();
    }
  
    initChatbot() {
      this.createChatUI();
      this.setupEventListeners();
    }
  
    createChatUI() {
      // Floating button
      this.chatButton = document.createElement("div");
      this.chatButton.id = "chat-button";
      this.chatButton.innerHTML = "💬";
      document.body.appendChild(this.chatButton);
  
      // Chat window
      this.chatContainer = document.createElement("div");
      this.chatContainer.id = "chat-container";
      this.chatContainer.innerHTML = `
        <div id="chat-header">
          <span>E-Library Chatbot</span>
          <button id="chat-fullscreen">⛶</button>
          <button id="chat-close">✖</button>
        </div>
        <div id="chat-body"></div>
        <input type="text" id="chat-input" placeholder="Ask something..." />
        <button id="chat-send">Send</button>
      `;
      document.body.appendChild(this.chatContainer);
      this.chatContainer.style.display = "none";
    }
  
    setupEventListeners() {
      this.chatButton.addEventListener("click", () => this.toggleChat());
      document.getElementById("chat-close").addEventListener("click", () => this.toggleChat());
      document.getElementById("chat-fullscreen").addEventListener("click", () => this.toggleFullScreen());
      document.getElementById("chat-send").addEventListener("click", () => this.handleUserInput());
      document.getElementById("chat-input").addEventListener("keypress", (e) => {
        if (e.key === "Enter") this.handleUserInput();
      });
    }
  
    toggleChat() {
      this.chatContainer.style.display = this.chatContainer.style.display === "none" ? "block" : "none";
    }
  
    toggleFullScreen() {
      this.chatContainer.classList.toggle("fullscreen");
    }
  
    handleUserInput() {
      const userInput = document.getElementById("chat-input").value.trim();
      if (!userInput) return;
      this.addMessage("You", userInput);
      document.getElementById("chat-input").value = "";
      this.getChatGPTResponse(userInput);
    }
  
    async getChatGPTResponse(userInput) {
      const apiUrl = "https://api.openai.com/v1/chat/completions";
      const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.apiKey}`
      };
  
      const body = JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userInput }],
      });
  
      try {
        const response = await fetch(apiUrl, { method: "POST", headers, body });
        const data = await response.json();
        const botReply = data.choices?.[0]?.message?.content || "Sorry, I couldn't understand that.";
        this.addMessage("Chatbot", botReply);
      } catch (error) {
        this.addMessage("Chatbot", "Error fetching response. Check your API key.");
      }
    }
  
    addMessage(sender, message) {
      const chatBody = document.getElementById("chat-body");
      const messageElement = document.createElement("div");
      messageElement.classList.add("chat-message");
      messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
      chatBody.appendChild(messageElement);
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }
  
  new FloatingChatbot();
  