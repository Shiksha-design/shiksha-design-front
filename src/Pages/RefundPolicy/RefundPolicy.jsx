import { Box, Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const RefundPolicy = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 9, }}>
            <Typography variant="title" sx={{ mb: 4 }}>
                Refund Policy
            </Typography>

            <Box sx={{ mb: 4 }}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Thank you for buying our courses. We ensure that our users have a rewarding experience while they discover, assess, and purchase our courses, whether it is an instructor-led or self-paced training. As with any online purchase experience, there are terms and conditions that govern our Refund Policy. When you buy a training course from us, you agree to our Privacy Policy, Terms of Use and Refund Policy.
                </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    For Self Placed Learning:
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                    To qualify for a refund, you must:
                </Typography>
                <List sx={{ listStyleType: 'disc', pl: 4 }}>
                    <ListItem sx={{ display: 'list-item', p: 0 }}>
                        <ListItemText primary="submit your refund request within 7 days of purchasing a course" />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', p: 0 }}>
                        <ListItemText primary="have consumed less than 25% of the video-learning content" />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', p: 0 }}>
                        <ListItemText primary="and not requested any exam voucher or kit." />
                    </ListItem>
                </List>
                <Typography variant="body1" sx={{ mt: 1 }}>
                    Any refund request failing to meet any of the requirements will not be accepted and no refund will be provided.
                </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    For Instructor Led Training:
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                    To qualify for a refund, you must:
                </Typography>
                <List sx={{ listStyleType: 'disc', pl: 4 }}>
                    <ListItem sx={{ display: 'list-item', p: 0 }}>
                        <ListItemText primary="submit your refund request within 7 days of purchasing your course" />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', p: 0 }}>
                        <ListItemText primary="have consumed less than 25% of the video-learning content" />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', p: 0 }}>
                        <ListItemText primary="have not attended more than one (1) live online class" />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', p: 0 }}>
                        <ListItemText primary="and not requested any exam voucher or kit" />
                    </ListItem>
                </List>
                <Typography variant="body1" sx={{ mt: 1 }}>
                    Any refund request failing to meet all of these requirements will not be accepted and no refund will be provided.
                </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Refund request can be initiated in two ways
                </Typography>
                <List sx={{ listStyleType: 'disc', pl: 4 }}>
                    <ListItem sx={{ display: 'list-item', p: 0 }}>
                        <ListItemText primary='From my orders section, by clicking on "Initiate Refund" for the relevant course. This will work when item purchase-quantity is one.' />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', p: 0 }}>
                        <ListItemText primary="In case item purchase-quantity is more than one, please reach out to our support team through our Help & Support section on the website." />
                    </ListItem>
                </List>
            </Box>
        </Container>
    );
};

export default RefundPolicy;
