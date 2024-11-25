import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function useSendMessage() {
  const candles = useSelector((state: RootState) => state.candles);
  const [finalPrice, setFinalPrice] = useState<number>(0);

  useEffect(() => {
    let auxFinalPrice = 0;
    candles.forEach((candle) => {
      auxFinalPrice +=
        (candle.essence.price + candle.style.price + candle.size.price) *
        candle.amount;
    });
    setFinalPrice(auxFinalPrice);
  }, [candles]);

  const generateMessage = () => {
    const greeting =
      "¡Hola! Aquí tienes los detalles de las velas seleccionadas:";
    const details = candles
      .map((candle, index) => {
        return `${index + 1}. ${candle.essence.name} - ${candle.size.name} - ${
          candle.style.name
        } x ${candle.amount}`;
      })
      .join("\n");

    return `${greeting}\n${details}`;
  };

  const sendMessage = () => {
    const phoneNumber = "573136734511"; // Número de WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      generateMessage()
    )}`;

    // Abre WhatsApp en una nueva pestaña
    window.open(url, "_blank");
  };

  return { candles, finalPrice, sendMessage };
}
