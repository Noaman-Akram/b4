import { useState, useEffect } from 'react';
import { Order } from '../types';
import { getAllOrders } from '../schedulingService'; // Assuming getAllOrders is in schedulingService

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const fetchedOrders = await getAllOrders();
        setOrders(fetchedOrders);
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Failed to fetch orders');
        console.error('Error fetching orders:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []); // Empty dependency array means this effect runs once on mount

  return {
    orders,
    loading,
    error,
  };
}

export default useOrders; 