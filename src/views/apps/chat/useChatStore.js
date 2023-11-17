import axios from "@axios";

import avatar1 from "@images/avatars/avatar-1.png";
import avatar2 from "@images/avatars/avatar-2.png";
import avatar3 from "@images/avatars/avatar-3.png";
import avatar4 from "@images/avatars/avatar-4.png";
import avatar5 from "@images/avatars/avatar-5.png";
import avatar6 from "@images/avatars/avatar-6.png";
import avatar8 from "@images/avatars/avatar-8.png";

export const useChatStore = defineStore("chat", {
  // ℹ️ arrow function recommended for full type inference
  state: () => ({
    contacts: [
      {
        id: 1,
        fullName: "Gavin Griffith",
        role: "Frontend Developer",
        about:
          "Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing",
        avatar: avatar5,
        status: "offline",
      },
      {
        id: 2,
        fullName: "Harriet McBride",
        role: "UI/UX Designer",
        about:
          "Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.",
        avatar: avatar2,
        status: "busy",
      },
      {
        id: 3,
        fullName: "Danny Conner",
        role: "Town planner",
        about:
          "Soufflé soufflé caramels sweet roll. Jelly lollipop sesame snaps bear claw jelly beans sugar plum sugar plum.",
        avatar: "",
        status: "busy",
      },
      {
        id: 4,
        fullName: "Janie West",
        role: "Data scientist",
        about:
          "Chupa chups candy canes chocolate bar marshmallow liquorice muffin. Lemon drops oat cake tart liquorice tart cookie. Jelly-o cookie tootsie roll halvah.",
        avatar: "",
        status: "online",
      },
      {
        id: 5,
        fullName: "Bryan Murray",
        role: "Dietitian",
        about:
          "Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing",
        avatar: avatar5,
        status: "busy",
      },
      {
        id: 6,
        fullName: "Albert Underwood",
        role: "Marketing executive",
        about:
          "Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.",
        avatar: avatar6,
        status: "online",
      },
      {
        id: 7,
        fullName: "Adele Ross",
        role: "Special educational needs teacher",
        about:
          "Biscuit powder oat cake donut brownie ice cream I love soufflé. I love tootsie roll I love powder tootsie roll.",
        avatar: "",
        status: "online",
      },
      {
        id: 8,
        fullName: "Mark Berry",
        role: "Advertising copywriter",
        about:
          "Bear claw ice cream lollipop gingerbread carrot cake. Brownie gummi bears chocolate muffin croissant jelly I love marzipan wafer.",
        avatar: avatar3,
        status: "away",
      },
      {
        id: 9,
        fullName: "Joseph Evans",
        role: "Designer, television/film set",
        about:
          "Gummies gummi bears I love candy icing apple pie I love marzipan bear claw. I love tart biscuit I love candy canes pudding chupa chups liquorice croissant.",
        avatar: avatar8,
        status: "offline",
      },
      {
        id: 10,
        fullName: "Blake Carter",
        role: "Building surveyor",
        about:
          "Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing",
        avatar: avatar4,
        status: "away",
      },
    ],
    chatsContacts: [
      {
        id: 1,
        userId: 2,
        unseenMsgs: 0,
        messages: [
          {
            message: "Hi",
            time: "Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)",
            senderId: 11,
            feedback: {
              isSent: true,
              isDelivered: true,
              isSeen: true,
            },
          },
          {
            message: "Hello. How can I help You?",
            time: "Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)",
            senderId: 2,
            feedback: {
              isSent: true,
              isDelivered: true,
              isSeen: true,
            },
          },
          {
            message:
              "Can I get details of my last transaction I made last month? 🤔",
            time: "Mon Dec 11 2018 07:46:10 GMT+0000 (GMT)",
            senderId: 11,
            feedback: {
              isSent: true,
              isDelivered: true,
              isSeen: true,
            },
          },
          {
            message: "We need to check if we can provide you such information.",
            time: "Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)",
            senderId: 2,
            feedback: {
              isSent: true,
              isDelivered: true,
              isSeen: true,
            },
          },
          {
            message: "I will inform you as I get update on this.",
            time: "Mon Dec 11 2018 07:46:15 GMT+0000 (GMT)",
            senderId: 2,
            feedback: {
              isSent: true,
              isDelivered: true,
              isSeen: true,
            },
          },
          {
            message: "If it takes long you can mail me at my mail address.",
            time: "Mon Dec 11 2018 07:46:20 GMT+0000 (GMT)",
            senderId: 11,
            feedback: {
              isSent: true,
              isDelivered: false,
              isSeen: false,
            },
          },
        ],
      },
      {
        id: 2,
        userId: 1,
        unseenMsgs: 1,
        messages: [
          {
            message: "How can we help? We're here for you!",
            time: "Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)",
            senderId: 11,
            feedback: {
              isSent: true,
              isDelivered: true,
              isSeen: true,
            },
          },
          {
            message:
              "Hey John, I am looking for the best admin template. Could you please help me to find it out?",
            time: "Mon Dec 10 2018 07:45:23 GMT+0000 (GMT)",
            senderId: 1,
            feedback: {
              isSent: true,
              isDelivered: true,
              isSeen: true,
            },
          },
          {
            message: "It should use nice Framework.",
            time: "Mon Dec 10 2018 07:45:55 GMT+0000 (GMT)",
            senderId: 1,
            feedback: {
              isSent: true,
              isDelivered: true,
              isSeen: true,
            },
          },
          {
            message: "Absolutely!",
            time: "Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)",
            senderId: 11,
            feedback: {
              isSent: true,
              isDelivered: true,
              isSeen: true,
            },
          },
          {
            message: "Our admin is the responsive admin template.!",
            time: "Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",
            senderId: 11,
            feedback: {
              isSent: true,
              isDelivered: true,
              isSeen: true,
            },
          },
          {
            message: "Looks clean and fresh UI. 😍",
            time: "Mon Dec 10 2018 07:46:23 GMT+0000 (GMT)",
            senderId: 1,
            feedback: {
              isSent: true,
              isDelivered: true,
              isSeen: true,
            },
          },
          {
            message: "It's perfect for my next project.",
            time: "Mon Dec 10 2018 07:46:33 GMT+0000 (GMT)",
            senderId: 1,
            feedback: {
              isSent: true,
              isDelivered: true,
              isSeen: true,
            },
          },
          {
            message: "How can I purchase it?",
            time: "Mon Dec 10 2018 07:46:43 GMT+0000 (GMT)",
            senderId: 1,
            feedback: {
              isSent: true,
              isDelivered: true,
              isSeen: true,
            },
          },
          {
            message: "Thanks, From our official site  😇",
            time: "Mon Dec 10 2018 07:46:53 GMT+0000 (GMT)",
            senderId: 11,
            feedback: {
              isSent: true,
              isDelivered: true,
              isSeen: true,
            },
          },
          {
            message: "I will purchase it for sure. 👍",
            time: "Mon Dec 10 2018 07:47:00 GMT+0000 (GMT)",
            senderId: 1,
            feedback: {
              isSent: true,
              isDelivered: true,
              isSeen: true,
            },
          },
        ],
      },
    ],
    profileUser: {
      id: 11,
      avatar: avatar1,
      fullName: "John Doe",
      role: "admin",
      about:
        "Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie marshmallow.",
      status: "online",
      settings: {
        isTwoStepAuthVerificationEnabled: true,
        isNotificationsOn: false,
      },
    },
    activeChat: {
      id: 1,
      userId: 11,
      unseenMsgs: 0,
      contact: {
        id: 11,
        avatar: avatar1,
        fullName: "John Doe",
        role: "admin",
        about:
          "Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie marshmallow.",
        status: "online",
        settings: {
          isTwoStepAuthVerificationEnabled: true,
          isNotificationsOn: false,
        },
      },
      messages: [
        {
          message: "Hi",
          time: "Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)",
          senderId: 11,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true,
          },
        },
        {
          message: "Hello. How can I help You?",
          time: "Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)",
          senderId: 2,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true,
          },
        },
        {
          message:
            "Can I get details of my last transaction I made last month? 🤔",
          time: "Mon Dec 11 2018 07:46:10 GMT+0000 (GMT)",
          senderId: 11,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true,
          },
        },
        {
          message: "We need to check if we can provide you such information.",
          time: "Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)",
          senderId: 2,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true,
          },
        },
        {
          message: "I will inform you as I get update on this.",
          time: "Mon Dec 11 2018 07:46:15 GMT+0000 (GMT)",
          senderId: 2,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true,
          },
        },
        {
          message: "If it takes long you can mail me at my mail address.",
          time: "Mon Dec 11 2018 07:46:20 GMT+0000 (GMT)",
          senderId: 11,
          feedback: {
            isSent: true,
            isDelivered: false,
            isSeen: false,
          },
        },
      ],
    },
  }),
  actions: {
    async fetchChatsAndContacts(q) {
      // const { data } = await axios.get(
      //   "http://127.0.0.1:5173/apps/chat/chats-and-contacts",
      //   {
      //     params: { q },
      //   }
      // );
      // const { chatsContacts, contacts, profileUser } = data;
      // this.chatsContacts = chatsContacts;
      // this.contacts = contacts;
      // this.profileUser = profileUser;
    },
    async getChat(userId) {
      // const { data } = await axios.get(`/apps/chat/chats/${userId}`);
      // this.activeChat = data;
    },
    async sendMsg(message) {
      // const senderId = this.profileUser?.id;
      // const { data } = await axios.post(
      //   `/apps/chat/chats/${this.activeChat?.contact.id}`,
      //   { message, senderId }
      // );
      // const { msg, chat } = data;
      // // ? If it's not undefined => New chat is created (Contact is not in list of chats)
      // if (chat !== undefined) {
      //   const activeChat = this.activeChat;
      //   this.chatsContacts.push({
      //     ...activeChat.contact,
      //     chat: {
      //       id: chat.id,
      //       lastMessage: [],
      //       unseenMsgs: 0,
      //       messages: [msg],
      //     },
      //   });
      //   if (this.activeChat) {
      //     this.activeChat.chat = {
      //       id: chat.id,
      //       messages: [msg],
      //       unseenMsgs: 0,
      //       userId: this.activeChat?.contact.id,
      //     };
      //   }
      // } else {
      //   this.activeChat?.chat?.messages.push(msg);
      // }
      // // Set Last Message for active contact
      // const contact = this.chatsContacts.find((c) => {
      //   if (this.activeChat) return c.id === this.activeChat.contact.id;
      //   return false;
      // });
      // contact.chat.lastMessage = msg;
    },
  },
});
