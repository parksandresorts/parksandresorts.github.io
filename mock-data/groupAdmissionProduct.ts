export const baseGroupAdmissionProduct = {
  productId: 321,
  productName: "Ticket to Ride",
  price: 100,
  timePassRequired: false,
  jetshopProductType: "string",
  productMetadata: {
    numberOfJetPassIncluded: 10,
    entryVariant: "Morning" as const,
    priceLevel: 5,
    visitorCategory: "Adult" as const,
    autoSelectTimeslot: false,
    timeLimits: {
      rideMinutesFromEntry: 10,
      lastActivityRelativeTime: 10,
    },
  },
  dateSlot: {
    dateSlotId: 123,
    date: "2034-06-24",
    quantity: 10,
  },
  template: {
    templateId: 123,
    highEntrance: true,
  },

  quantity: 1,
};
