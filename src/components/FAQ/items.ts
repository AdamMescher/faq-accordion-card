interface Item {
  id: string;
  heading: string;
  content: string;
}

const items: Array<Item> = [
  {
    id: "001",
    heading: "How many team members can I invite?",
    content:
      "You can invite up to 2 additional users on the Free plan. There is no limit on  team members for the Premium plan."
  },
  {
    id: "002",
    heading: "What is the maximum file upload size?",
    content:
      "No more than 2GB. All files in your account must fit your allotted storage space."
  },
  {
    id: "003",
    heading: "How do I reset my password?",
    content:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
  },
  {
    id: "004",
    heading: "Can I cancel my subscription?",
    content:
      "Yes! Send us a message and we’ll process your request no questions asked."
  },
  {
    id: "005",
    heading: "Do you provide additional support?",
    content:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours."
  }
];

export default items;
