---
title: Definitions.cs
---

# Definitions
This file contains variables and other "definitions" that can be reused throughout the Patcher.

## Legend
- Search - What the Patcher looks for in the Vanilla game file.
- Patch - What the Patcher patches the game with.

## Strings

### `patcherVer` - Patcher Version {#patcherVer}

:::danger
Read only value, please do not update this version string unless you know what you're doing.
:::

- Specific version of the Control Patcher

### `controlDir` - User selected directory for Control.exe {#controlDir}

- Must be a valid directory with `Control.exe`, `Control_DX11.exe` and `Control_DX12.exe`

### `dxVer` - User selected DirectX version {#dxVer}

- DX11
- DX12

### `gameVer` - User selected Control Version {#gameVer}

## Patches

### `IntroSkipPatch` {#introSkip}

- Skips intro in `ep100-000-pc.rmdp` file located in `controlDir/data_packfiles`

    - Search at offset(h) `224352020` - `224352030`

        - ```csharp
          ...0x53, 0x00, 0x58, 0x02, 0x00, 0x00, 0x10, 0xFC, 0x00, 0x00, 0x58, 0x02, 0x00...
          ```

    - Patch

        - ```csharp
          ...0x53, 0x00, 0x03, 0x00, 0x00, 0x00, 0x10, 0xFC, 0x00, 0x00, 0x03, 0x00, 0x00...
          ```

### `SSE42CheckDisablePatch` {#sse42}

- Disables the SSE4.2 Check on CPUs that don't support SSE4.2 in `rl_rmdwin7_f.dll` [DX11]
      and `rl_rmdwin10_f.dll` [DX12]

- upgrade your processor please? why are you playing on an older processor that's not supported by Control?

    - Search at offset(h) `0005b8B0`

        - ```csharp
          ...0x14, 0x73, 0x0A, 0x8B...
          ```

    - Patch

        - ```csharp
          ...0x14, 0x90, 0x90, 0x8B...
          ```

### `PS4DLCPatchEpic` / `PS4DLCPatchSteamGOG` {#ps4dlc}

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

    - Patch

        - ```csharp
          ...0xED, 0xEB, 0x07...
          ```

    - Searches [Steam / GOG]

        - Search at offset(h) `00145B00` and `00145BA0`

        - ```csharp title="Part 1"
          ...0xED, 0x75, 0x07...
          ```

        - ```csharp title="Part 2"
          ...0x00, 0x75, 0x2F, 0x48...
          ```

    - Patch

        - ```csharp title="Part 1"
          ...0xED, 0xEB, 0x07...
          ```

        - ```csharp title="Part 2"
          ...0x00, 0x90, 0x90, 0x48...
          ```
