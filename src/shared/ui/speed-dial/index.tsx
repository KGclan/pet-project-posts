import React, { useState } from 'react';
import { Backdrop, Box, SpeedDial, SpeedDialAction } from '@mui/material';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';

const SpeedDialTooltip = () => {
    const [open, setOpen] = useState(false);
    const actions = [
        { icon: <FileCopyIcon />, name: 'Add' },
    ];
    const positionStyles = { position: 'fixed', bottom: 16, right: 16 };

    return (
        <Box sx={positionStyles}>
          <Backdrop open={open} />
          <SpeedDial
            ariaLabel="SpeedDial"
            sx={positionStyles}
            icon={<SpeedDialIcon />}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                tooltipOpen
              />
            ))}
          </SpeedDial>
        </Box>
      );
};

export default SpeedDialTooltip;