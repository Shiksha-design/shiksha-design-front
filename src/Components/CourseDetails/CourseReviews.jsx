import React from 'react';
import { Box, Typography, Stack, LinearProgress, Rating, Avatar, Grid, Pagination } from '@mui/material';
import { Reply } from '@mui/icons-material';
import { colors } from '../../Config/theme';

const reviews = [
    {
        name: "Laura Hipster",
        date: "October 03, 2022",
        avatar: "https://i.pravatar.cc/150?img=5",
        content: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel."
    },
    {
        name: "Laura Hipster",
        date: "October 03, 2022",
        avatar: "https://i.pravatar.cc/150?img=5",
        content: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in."
    },
    {
        name: "Laura Hipster",
        date: "October 03, 2022",
        avatar: "https://i.pravatar.cc/150?img=5",
        content: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in."
    }
];

const RatingBar = ({ stars, percent }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
        <Rating value={stars} readOnly size="small" sx={{ fontSize: '0.9rem', color: '#ff5722' }} />
        <Typography variant="caption" sx={{ minWidth: 25, color: '#64748b' }}>{percent}%</Typography>
        <Box sx={{ flexGrow: 1, height: 6, bgcolor: '#f1f5f9', borderRadius: 3 }}>
            <Box sx={{ width: `${percent}%`, height: '100%', bgcolor: stars === 5 ? '#ff5722' : '#ff5722', borderRadius: 3 }} />
        </Box>
    </Box>
);

const CourseReviews = () => {
    return (
        <Box sx={{ mb: 6 }}>
            <Typography variant="title" sx={{ mb: 3, color: colors.primary }}>
                Reviews
            </Typography>

            <Box sx={{ p: 3, border: '1px solid #e2e8f0', borderRadius: 2, mb: 4 }}>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box>
                        <Typography variant="h3" fontWeight={700} color="#26394D" sx={{ mb: 1 }}>
                            4.0
                        </Typography>
                    </Box>
                    <Box>
                        <Rating value={4} readOnly sx={{ color: '#ff5722', mb: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                            based on 146,951 ratings
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <RatingBar stars={5} percent={90} />
                    <RatingBar stars={4} percent={5} />
                    <RatingBar stars={3} percent={2} />
                    <RatingBar stars={2} percent={2} />
                    <RatingBar stars={1} percent={1} />
                </Box>

                <Stack>
                    {reviews.map((review, index) => (
                        <Box key={index} sx={{ display: 'flex', gap: 2, borderBottom: '1px solid #e2e8f0', borderTop: index === 0 ? '1px solid #e2e8f0' : 'none', py: 3 }}>
                            <Avatar src={review.avatar} sx={{ width: 60, height: 60, border: `3px solid ${colors.primary}`, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                            <Box sx={{ flexGrow: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="subtitle1" fontWeight={600} color={colors.primary}>
                                        {review.name}
                                    </Typography>
                                    <Typography variant="caption" color={colors.primary}>
                                        {review.date}
                                    </Typography>
                                </Box>
                                <Typography variant="body2" color="text.secondary" paragraph>
                                    {review.content}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer', color: '#ff5722' }}>
                                    <Reply fontSize="small" sx={{ transform: 'scaleX(-1)' }} />
                                    <Typography variant="caption" fontWeight={600}>Reply</Typography>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Stack>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                    <Pagination count={10} color="primary" shape="rounded" />
                </Box>
            </Box>



        </Box >
    );
};

export default CourseReviews;
