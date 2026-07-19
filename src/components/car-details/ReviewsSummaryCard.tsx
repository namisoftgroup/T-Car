'use client';

import { FiStar } from 'react-icons/fi';

interface Props {
  rating: number;
  reviewsCount: number;
}

export default function ReviewsSummaryCard({
  rating,
  reviewsCount,
}: Props) {
  return (
    <section id="reviews-summary" className="reviews-summary-card">
      <div className="reviews-summary-header">
        <h3>التقييم الإجمالي</h3>
      </div>

      <div className="reviews-summary-overall">
        <div className="reviews-summary-label">
          <div className="stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <FiStar
                key={i}
                className={i < Math.round(rating) ? 'filled' : ''}
              />
            ))}
          </div>

          <span className="count">({reviewsCount} تقييم)</span>
        </div>

        <span className="reviews-summary-score">
          {rating.toFixed(1)}
        </span>
      </div>
    </section>
  );
}