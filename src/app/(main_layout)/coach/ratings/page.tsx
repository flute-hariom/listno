'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Star, ThumbsUp, MessageCircle, TrendingUp, ArrowLeft, Filter } from 'lucide-react';

interface Review {
  id: string;
  clientName: string;
  clientAvatar: string;
  rating: number;
  comment: string;
  category: string;
  sessionType: string;
  date: string;
  helpful: number;
}

const Ratings = () => {
  const router = useRouter();
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  const overallRating = 4.9;
  const totalReviews = 234;
  const ratingDistribution = [
    { stars: 5, count: 210, percentage: 90 },
    { stars: 4, count: 18, percentage: 8 },
    { stars: 3, count: 4, percentage: 2 },
    { stars: 2, count: 1, percentage: 0 },
    { stars: 1, count: 1, percentage: 0 }
  ];

  const [reviews] = useState<Review[]>([
    {
      id: '1',
      clientName: 'Priya Sharma',
      clientAvatar: 'PS',
      rating: 5,
      comment: 'Absolutely amazing session! Dr. Sarah helped me understand my relationship issues and gave practical advice. Her empathetic approach made me feel heard and valued. Highly recommended!',
      category: 'Relationships',
      sessionType: 'Video Call',
      date: '2 days ago',
      helpful: 12
    },
    {
      id: '2',
      clientName: 'Rahul Verma',
      clientAvatar: 'RV',
      rating: 5,
      comment: 'Great listener and excellent advisor. The career counseling session was exactly what I needed. Clear guidance and actionable steps.',
      category: 'Career',
      sessionType: 'Audio Call',
      date: '1 week ago',
      helpful: 8
    },
    {
      id: '3',
      clientName: 'Ananya Patel',
      clientAvatar: 'AP',
      rating: 5,
      comment: 'Very professional and understanding. Helped me develop better coping mechanisms for anxiety. I feel more confident now.',
      category: 'Mind & Emotions',
      sessionType: 'Chat',
      date: '1 week ago',
      helpful: 15
    },
    {
      id: '4',
      clientName: 'Vikram Singh',
      clientAvatar: 'VS',
      rating: 4,
      comment: 'Good session overall. Helpful advice on work-life balance. Would have liked more specific strategies.',
      category: 'Wellness',
      sessionType: 'Video Call',
      date: '2 weeks ago',
      helpful: 5
    },
    {
      id: '5',
      clientName: 'Meera Iyer',
      clientAvatar: 'MI',
      rating: 5,
      comment: 'Exceptional guidance on family conflicts. Dr. Sarah provided tools that actually worked. My family relationships have improved significantly.',
      category: 'Relationships',
      sessionType: 'Video Call',
      date: '2 weeks ago',
      helpful: 20
    },
    {
      id: '6',
      clientName: 'Arjun Nair',
      clientAvatar: 'AN',
      rating: 5,
      comment: 'Insightful career growth strategies. Helped me identify my strengths and plan my next steps effectively.',
      category: 'Career',
      sessionType: 'Audio Call',
      date: '3 weeks ago',
      helpful: 7
    },
    {
      id: '7',
      clientName: 'Sneha Reddy',
      clientAvatar: 'SR',
      rating: 4,
      comment: 'Very helpful with exam stress management. Practical techniques that I can use daily. Recommend for students.',
      category: 'Education',
      sessionType: 'Video Call',
      date: '3 weeks ago',
      helpful: 10
    },
    {
      id: '8',
      clientName: 'Karthik Kumar',
      clientAvatar: 'KK',
      rating: 3,
      comment: 'Decent session but expected more personalized approach. The advice was somewhat generic.',
      category: 'Mind & Emotions',
      sessionType: 'Chat',
      date: '1 month ago',
      helpful: 3
    }
  ]);

  const filteredReviews = filterRating === 'all' 
    ? reviews 
    : reviews.filter(r => r.rating === filterRating);

  return (
    <div className="min-h-screen pb-24 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex items-center gap-4">
          <button
            onClick={() => router.push('/coach/dashboard')}
            className="p-2 hover:bg-white/50 rounded-lg transition-all"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Ratings & Feedback</h1>
            <p className="text-gray-600">See what your clients are saying</p>
          </div>
        </div>

        {/* Overall Rating Card */}
        <div className="bg-white rounded-3xl p-8 shadow-md mb-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Rating Summary */}
            <div className="text-center md:border-r border-gray-200">
              <p className="text-7xl font-bold text-gray-800 mb-3">{overallRating}</p>
              <div className="flex justify-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-lg">Based on {totalReviews} reviews</p>
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">Excellent Performance</span>
              </div>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-3">
              {ratingDistribution.map((dist) => (
                <div key={dist.stars} className="flex items-center gap-3">
                  <div className="flex items-center gap-1 w-16">
                    <span className="font-semibold text-gray-700">{dist.stars}</span>
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all"
                      style={{ width: `${dist.percentage}%` }}
                    />
                  </div>
                  <span className="text-gray-600 font-medium w-16 text-right">{dist.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-4 shadow-md text-center">
            <p className="text-3xl font-bold text-purple-600 mb-1">{totalReviews}</p>
            <p className="text-gray-600 text-sm">Total Reviews</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-md text-center">
            <p className="text-3xl font-bold text-green-600 mb-1">98%</p>
            <p className="text-gray-600 text-sm">Positive</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-md text-center">
            <p className="text-3xl font-bold text-blue-600 mb-1">156</p>
            <p className="text-gray-600 text-sm">This Month</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-md text-center">
            <p className="text-3xl font-bold text-yellow-600 mb-1">Top 5%</p>
            <p className="text-gray-600 text-sm">Ranking</p>
          </div>
        </div>

        {/* Filter */}
        <div className="bg-white rounded-2xl p-4 shadow-md mb-6">
          <div className="flex items-center gap-3 overflow-x-auto">
            <Filter className="w-5 h-5 text-gray-600 flex-shrink-0" />
            <button
              onClick={() => setFilterRating('all')}
              className={`px-4 py-2 rounded-xl font-semibold whitespace-nowrap transition-all ${
                filterRating === 'all'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Reviews
            </button>
            {[5, 4, 3, 2, 1].map((rating) => (
              <button
                key={rating}
                onClick={() => setFilterRating(rating)}
                className={`px-4 py-2 rounded-xl font-semibold whitespace-nowrap transition-all flex items-center gap-1 ${
                  filterRating === rating
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {rating} <Star className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {filteredReviews.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 shadow-md text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">No reviews found</h3>
              <p className="text-gray-600">Try adjusting your filter</p>
            </div>
          ) : (
            filteredReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Client Avatar */}
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {review.clientAvatar}
                  </div>

                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">{review.clientName}</h3>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < review.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex gap-2 mb-4">
                      <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-semibold">
                        {review.category}
                      </span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold">
                        {review.sessionType}
                      </span>
                    </div>

                    {/* Comment */}
                    <p className="text-gray-700 leading-relaxed mb-4">{review.comment}</p>

                    {/* Actions */}
                    <div className="flex items-center gap-4 text-sm">
                      <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-all">
                        <ThumbsUp className="w-4 h-4" />
                        <span>Helpful ({review.helpful})</span>
                      </button>
                      <button
                        onClick={() => setSelectedReview(review)}
                        className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-all"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Respond</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Response Modal */}
      {selectedReview && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">Respond to Review</h2>
              <button
                onClick={() => setSelectedReview(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-all"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              {/* Original Review */}
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {selectedReview.clientAvatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{selectedReview.clientName}</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < selectedReview.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">{selectedReview.comment}</p>
              </div>

              {/* Response Form */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Response</label>
                <textarea
                  placeholder="Thank your client and address any concerns..."
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none resize-none"
                  rows={6}
                />
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => {
                    alert('Response sent successfully!');
                    setSelectedReview(null);
                  }}
                  className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Send Response
                </button>
                <button
                  onClick={() => setSelectedReview(null)}
                  className="flex-1 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 shadow-lg z-40">
        <div className="max-w-6xl mx-auto flex justify-around">
          {[
            { icon: '🏠', label: 'Home', path: '/coach/dashboard' },
            { icon: '📥', label: 'Requests', path: '/coach/requests' },
            { icon: '📅', label: 'Schedule', path: '/coach/schedule' },
            { icon: '💰', label: 'Earnings', path: '/coach/earnings' },
            { icon: '👤', label: 'Profile', path: '/coach/setup' }
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => router.push(item.path)}
              className="flex flex-col items-center gap-1 text-gray-600"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ratings;