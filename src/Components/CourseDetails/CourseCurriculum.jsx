import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Button, Stack } from '@mui/material';
import { ExpandMore, PlayCircleOutline, DescriptionOutlined, LockOutlined, Check, Description } from '@mui/icons-material';
import { colors } from '../../Config/theme';

const sections = [
    {
        title: "Lessons with video content",
        lessonsCount: 5,
        duration: "45 Mins",
        items: [
            { title: "Lessons with video content", type: 'video', time: "12:30", preview: true, status: 'completed' },
            { title: "Lessons with video content", type: 'video', time: "12:30", preview: false, status: 'completed' },
            { title: "Lessons with video content", type: 'video', time: "12:30", preview: true, status: 'locked' },
            { title: "Lessons with video content", type: 'video', time: "12:30", preview: false, status: 'locked' },
            { title: "Lessons with video content", type: 'video', time: "12:30", preview: false, status: 'locked' },
        ]
    },
    {
        title: "Lessons with video content",
        lessonsCount: 5,
        duration: "45 Mins",
        items: []
    },
    {
        title: "Lessons with video content",
        lessonsCount: 5,
        duration: "45 Mins",
        items: []
    },
    {
        title: "Lessons with video content",
        lessonsCount: 5,
        duration: "45 Mins",
        items: []
    }
];

const CourseCurriculum = () => {
    const [expanded, setExpanded] = useState('panel0');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Box sx={{ mb: 6 }}>
            <Typography variant="title" sx={{ mb: 3, color: colors.primary }}>
                Curriculum
            </Typography>

            {sections.map((section, index) => (
                <Accordion
                    key={index}
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                    sx={{
                        mb: 2,
                        boxShadow: 'none',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px !important',
                        '&:before': { display: 'none' },
                        overflow: 'hidden'
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        sx={{
                            bgcolor: expanded === `panel${index}` ? '#fff' : '#fff', // Keep white or change if open style needed
                        }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', pr: 2 }}>
                            <Typography
                                fontWeight={500}
                                sx={{ color: expanded === `panel${index}` ? colors.primary : '#334155' }}
                            >
                                {section.title}
                            </Typography>
                            <Stack direction="row" spacing={3} alignItems="center">
                                <Typography variant="body2" color="text.secondary">{section.lessonsCount} Lessons</Typography>
                                <Typography variant="body2" color="text.secondary">{section.duration}</Typography>
                            </Stack>
                        </Box>
                    </AccordionSummary>

                    <AccordionDetails sx={{ pt: 0, pb: 2 }}>
                        <Stack spacing={2}>
                            {section.items.map((item, i) => (
                                <Box key={i} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 1 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <DescriptionOutlined sx={{ color: '#64748b', fontSize: 20 }} />
                                        <Typography variant="body2" color="#334155" fontWeight={500}>
                                            {item.title}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                                        {item.preview && (
                                            <Button
                                                variant="contained"
                                                size="small"
                                                sx={{
                                                    textTransform: 'none',
                                                    bgcolor: colors.primary,
                                                    height: 28,
                                                    fontSize: '0.75rem',
                                                    boxShadow: 'none'
                                                }}
                                            >
                                                Preview
                                            </Button>
                                        )}

                                        <Typography variant="caption" fontWeight={600} color="#64748b">
                                            {item.time}
                                        </Typography>

                                        {item.status === 'completed' ? (
                                            <Check sx={{ fontSize: 18, color: '#334155' }} />
                                        ) : (
                                            <LockOutlined sx={{ fontSize: 18, color: '#94a3b8' }} />
                                        )}
                                    </Box>
                                </Box>
                            ))}
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export default CourseCurriculum;
