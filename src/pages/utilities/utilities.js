export const getDashboardData = (inventory) =>
  inventory.reduce(
    (acc, { stock, delivered }) => {
      if (stock <= 10) {
        return {
          totalStock: acc.totalStock + stock,
          totalDelivered: acc.totalDelivered + delivered,
          lowStockItems: acc.lowStockItems + 1,
        };
      } else {
        return {
          totalStock: acc.totalStock + stock,
          totalDelivered: acc.totalDelivered + delivered,
          lowStockItems: acc.lowStockItems,
        };
      }
    },
    { totalStock: 0, totalDelivered: 0, lowStockItems: 0 }
  );
