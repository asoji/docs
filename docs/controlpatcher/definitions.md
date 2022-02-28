---
title: Definitions.cs Docs
---

# Definitions

## Strings

- `patcherVersion` - Patcher Version

  - Read only value, please do not update unless you know what you're doing.

- `controlDir` - User selected directory for Control.exe

  - Must be a valid directory with `Control.exe`, `Control_DX11.exe` and `Control_DX12.exe`

- `dxVer` - User selected DirectX version

  - DX11
  - DX12

- `gameVer` - User selected Control Version

## Patches

- `IntroSkipPatch`

  - Skips into in `ep100-000-pc.rmdp` file located in `controlDir/data_packfiles`

    - Searches

      - ```csharp
        ...0x53, 0x00, 0x58, 0x02, 0x00, 0x00, 0x10, 0xFC, 0x00, 0x00, 0x58, 0x02, 0x00...
        ```

    - Patches

      - ```csharp
        ...0x53, 0x00, 0x03, 0x00, 0x00, 0x00, 0x10, 0xFC, 0x00, 0x00, 0x03, 0x00, 0x00...
        ```

- `SSE42CheckDisablePatch`

  - Disables the SSE4.2 Check on CPUs that don't support SSE4.2 in `rl_rmdwin7_f.dll` [DX11] and `rl_rmdwin10_f.dll` [DX12]

  - upgrade your processor please? why are you playing on an older processor that's not supported by Control?

    - Searches

      - ```csharp
        ...0x14, 0x73, 0x0A, 0x8B...
        ```

    - Patches

      - ```csharp
        ...0x14, 0x90, 0x90, 0x8B...
        ```

- `PS4DLCPatchEpic` / `PS4DLCPatchSteamGOG`

  - Gives PS4 Exclusive DLC in `Control_DX11.exe` and `Control_DX12.exe`

    - Unlocks the following:

      - "Dr. Yoshimi Tokui's Guided Imagery Experience" side mission

      - 2 exclusive outfits

      - 2 rare mods

      - PC _pre-order_ bonus ✨

    - Searches [Epic Games]

      - Search at offset(h) `00147AC0`

      - ```csharp
        ...0xED, 0x75, 0x07...
        ```

    - Patches

      - ```csharp
        ...0xED, 0xEB, 0x07...
        ```

    - Searches [Steam / GOG]

      - Search at offset(h) `00145B00` and `00145BA0`

      - ```csharp
        ...0xED, 0x75, 0x07...
        ```

      - ```csharp
        ...0x00, 0x75, 0x2F, 0x48...
        ```

    - Patches

      - ```csharp
        ...0xED, 0xEB, 0x07...
        ```

      - ```csharp
        ...0x00, 0x90, 0x90, 0x48...
        ```
