import React, { useState } from 'react';

const questions = [
  {
    text: "Q1. What best describes your body weight over time?",
    options: {
      Vata: "Underweight or struggles to gain weight",
      Pitta: "Average, maintains weight easily",
      Kapha: "Overweight, gains weight quickly"
    }
  },
  {
    text: "Q2. What is your natural body structure like?",
    options: {
      Vata: "Thin, lean, hard to gain weight",
      Pitta: "Medium build, muscular",
      Kapha: "Broad, heavy, gains weight easily"
    }
  },
  {
    text: "Q3. How is your appetite?",
    options: {
      Vata: "Irregular hunger, forgets to eat",
      Pitta: "Strong appetite, gets hungry quickly",
      Kapha: "Steady, low appetite"
    }
  },
  {
    text: "Q4. Bowel movement pattern?",
    options: {
      Vata: "Irregular, dry or constipated",
      Pitta: "Regular, soft or loose",
      Kapha: "Regular, solid, smooth"
    }
  },
  {
    text: "Q5. What does your skin feel like?",
    options: {
      Vata: "Dry, rough, thin",
      Pitta: "Soft, warm, sensitive",
      Kapha: "Oily, smooth, thick"
    }
  },
  {
    text: "Q6. How is your sleep usually?",
    options: {
      Vata: "Light, disturbed",
      Pitta: "Moderate, may wake up sometimes",
      Kapha: "Deep, long, hard to wake"
    }
  },
  {
    text: "Q7. Energy throughout the day?",
    options: {
      Vata: "Varies, gets tired fast",
      Pitta: "Good, sharp bursts",
      Kapha: "Steady, consistent"
    }
  },
  {
    text: "Q8. Which foods do you prefer?",
    options: {
      Vata: "Sweet, sour, salty",
      Pitta: "Cool, sweet, bitter",
      Kapha: "Spicy, dry, bitter"
    }
  },
  {
    text: "Q9. How do you learn?",
    options: {
      Vata: "Quick to learn, quick to forget",
      Pitta: "Average memory",
      Kapha: "Slow learner but remembers well"
    }
  },
  {
    text: "Q10. Which climate suits you best?",
    options: {
      Vata: "Warm and humid",
      Pitta: "Cool and dry",
      Kapha: "Warm and dry"
    }
  }
];

const doshaTypes = ["Vata", "Pitta", "Kapha"];

export default function AyuNovaDoshaForm() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [result, setResult] = useState(null);

  const handleChange = (qIndex, dosha) => {
    const updated = [...answers];
    updated[qIndex] = dosha;
    setAnswers(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tally = { Vata: 0, Pitta: 0, Kapha: 0 };
    answers.forEach((ans) => {
      if (ans) tally[ans]++;
    });
    setResult(tally);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-200">
      <h1 className="text-3xl font-bold mb-4">AyuNova – Know Your Prakriti</h1>
      <p className="mb-6 text-gray-600">
        Answer a few questions and discover your unique Ayurvedic dosha type — Vata, Pitta, or Kapha — with personalized lifestyle suggestions.
      </p>
      <form onSubmit={handleSubmit}>
        {questions.map((q, index) => (
          <div key={index} className="mb-6 border-b pb-4">
            <p className="font-semibold mb-2">{q.text}</p>
            {doshaTypes.map((dosha) => (
              <label key={dosha} className="block mb-1">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={dosha}
                  checked={answers[index] === dosha}
                  onChange={() => handleChange(index, dosha)}
                  required
                />
                <span className="ml-2">{q.options[dosha]} <strong>({dosha})</strong></span>
              </label>
            ))}
          </div>
        ))}
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Submit
        </button>
      </form>

      {result && (
        <div className="mt-8 bg-gray-100 p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Your Dosha Tally</h2>
          <ul className="list-disc pl-6">
            <li><strong>Vata:</strong> {result.Vata}</li>
            <li><strong>Pitta:</strong> {result.Pitta}</li>
            <li><strong>Kapha:</strong> {result.Kapha}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
